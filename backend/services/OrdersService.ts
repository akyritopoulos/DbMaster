import { Order, OrdersModel } from '../models/ordersModel';

export class OrdersService {
  async getAllOrders(): Promise<Order[]> {
    return await OrdersModel.getAllOrders();
  }

  async getOrderById(id: number): Promise<Order | null> {
    return await OrdersModel.getOrderById(id);
  }

  async createOrder(orderData: Order): Promise<Order | null> {
    return await OrdersModel.createOrder(orderData);
  }

  async updateOrder(id: number, orderData: Order): Promise<Order | null> {
    return await OrdersModel.updateOrder(id, orderData);
  }

  async deleteOrder(id: number): Promise<Order | null> {
    return await OrdersModel.deleteOrder(id);
  }
}
