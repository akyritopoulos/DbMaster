/**Builds where statement starting like and a=b and z=1
 * @param objectForUpdateStatement object that contains key values for where statement {a:1} => and a=1 || {a:[1,2,3] => (or a=1 or a=2 or a=3)}
 * @param accepted_keys what are the accepted keys that will be converted to sql where statement
 */
const buildWhereStatement = (accepted_keys, objectForUpdateStatement) => {
  let offset = 0;
  let counter = 0;
  const isKeyValuePairArray = (x) => Array.isArray(x);
  const arrayHasLengthMoreThanOne = (array) => !!(array.length > 1);

  const indicesThatIncludeNullishValues = Object.values(
    objectForUpdateStatement
  )
    .map((x, index) => {
      if (
        x == null ||
        (Array.isArray(x) && (x[0] === null || x.length === 0))
      ) {
        return index;
      }
    })
    .filter((xx) => xx);

  // delete null keys from the object
  Object.keys(objectForUpdateStatement).map((x, index) => {
    if (indicesThatIncludeNullishValues.includes(index)) {
      delete objectForUpdateStatement[x];
    }
  });

  // build query
  return Object.keys(objectForUpdateStatement)
    .map((x) =>
      accepted_keys.includes(x) &&
      objectForUpdateStatement[x] !== null &&
      objectForUpdateStatement[x] !== undefined
        ? // check if key in the object is part of the accepted keys
          isKeyValuePairArray(objectForUpdateStatement[x]) && // check if array to..
          arrayHasLengthMoreThanOne(objectForUpdateStatement[x]) //.. create (a=1 or a=2 or a=3)
          ? objectForUpdateStatement[x].map((_, i) => {
              return ` ${i > 0 ? 'or' : ''}  ${x} = $${offset++ + counter + 1}`;
            })
          : `and ${x} = $${offset + counter++ + 1}`
        : null
    )
    .filter((x) => x != null) // eliminate nullish values
    .map((yy) => {
      // check to include --> and ( ) <-- in the or statement
      const stringOfOrStatements = Array.isArray(yy) ? yy.join(' ') : yy;
      return Array.isArray(yy)
        ? ` and (${stringOfOrStatements})`
        : stringOfOrStatements;
    })
    .join(' ');
};

/*
 * "first_name":"Homi",
 * "last_name": "G"
 *
 * query:                  UPDATE users SET  first_name = $1 , last_name = $2  WHERE id=$3
 * whereStatementArray:     [ 'Homi', 'G', '156' ]
 * update objectValues{key -> columns, values -> values} from table, using where id
 */
const buildUpdateQuery = ({ objectValues, table, whereId }) => {
  const filterValues = Object.entries(objectValues).filter(
    (x) => x[1] || x[1] === false || x[1] === null
  );
  let query = `UPDATE ${table} SET `;
  filterValues.map(
    (key, index, arr) =>
      (query += `${key[0]} = $${index + 1} ${
        index == arr.length - 1 ? '' : ','
      }`)
  );
  query += ` WHERE id=$${filterValues.length + 1}`;

  const whereStatementArray = [
    ...Object.values(objectValues).filter(
      (x) => x || x === false || x === null
    ),
    whereId,
  ];
  return { query, whereStatementArray };
};

/**Builds where statement starting like and a=b and z=1
 * @param objectForUpdateStatement object that contains key values for where statement {a:1} => and a=1
 * @param accepted_keys what are the accepted keys that will be converted to sql where statement
 */
const buildQueryArray = (accepted_keys, objectForUpdateStatement) => {
  return Object.keys(objectForUpdateStatement)
    .map((x) =>
      accepted_keys.includes(x) &&
      objectForUpdateStatement[x] !== null &&
      objectForUpdateStatement[x] !== undefined
        ? Array.isArray(x)
          ? [...x]
          : objectForUpdateStatement[x]
        : null
    )
    .filter((x) => x != null)
    .flat();
};

/** Build Pagination query
 * @param query query to be appended to the pagination query part
 * @param limitOffset {limit:10, offset:0}
 */
function limitOffsetQuery(query, limitOffset) {
  const { limit, offset } = limitOffset;
  if (!limit || offset === undefined || offset === null) return query;
  return (query += ` limit ${limit} offset ${limit * offset}`);
}

function orderQuery({ name, option }) {
  if (!name || !option) return '';
  return ` order by ${name} ${option}`;
}

module.exports = {
  buildWhereStatement,
  buildQueryArray,
  buildUpdateQuery,
  orderQuery,
  limitOffsetQuery,
};
