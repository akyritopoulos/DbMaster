interface ObjectForUpdateStatement {
  [key: string]: string | number | null | undefined | Array<string | number> | boolean;
}

type AcceptedKeys = string[];

const buildWhereStatement = (accepted_keys: AcceptedKeys, objectForUpdateStatement: ObjectForUpdateStatement) => {
  let offset = 0;
  let counter = 0;

  const isKeyValuePairArray = (x: any) => Array.isArray(x);
  const arrayHasLengthMoreThanOne = (array: any[]) => array.length > 1;

  const indicesThatIncludeNullishValues = Object.values(objectForUpdateStatement)
    .map((x, index) => {
      if (x == null || (Array.isArray(x) && (x[0] === null || x.length === 0))) {
        return index;
      }
    })
    .filter((xx) => xx);

  Object.keys(objectForUpdateStatement).map((x, index) => {
    if (indicesThatIncludeNullishValues.includes(index)) {
      delete objectForUpdateStatement[x];
    }
  });


interface ObjectValues {
  [key: string]: string | number | null | boolean;
}

interface BuildUpdateQueryProps {
  objectValues: ObjectValues;
  table: string;
  whereId: string;
}

};

interface BuildQueryArrayProps {
  accepted_keys: AcceptedKeys;
  objectForUpdateStatement: ObjectForUpdateStatement;
}

const buildQueryArray = ({ accepted_keys, objectForUpdateStatement }: BuildQueryArrayProps) => {
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

interface LimitOffset {
  limit: number;
  offset: number;
}

const limitOffsetQuery = (query: string, limitOffset: LimitOffset) => {
  const { limit, offset } = limitOffset;
  if (!limit || offset === undefined || offset === null) return query;
  return (query += ` limit ${limit} offset ${limit * offset}`);
};

interface OrderQueryProps {
  name: string;
  option: string;
}

const orderQuery = ({ name, option }: OrderQueryProps) => {
  if (!name || !option) return '';
  return ` order by ${name} ${option}`;
};

export {
  buildWhereStatement,
  buildQueryArray,
  limitOffsetQuery,
  orderQuery,
};
