import { Request, Response } from 'express';
import { OrdersService } from '../services/OrdersService';

const ordersService: OrdersService = new OrdersService();

export class OrdersController {
  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await ordersService.getAllOrders();
      res.json(orders);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    }
  }

  async getOrderById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const order = await ordersService.getOrderById(parseInt(id));
      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    }
  }

  async createOrder(req: Request, res: Response) {
    const orderData = req.body;
    try {
      const newOrder = await ordersService.createOrder(orderData);
      res.status(201).json(newOrder);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    }
  }

  async updateOrder(req: Request, res: Response) {
    const { id } = req.params;
    const orderData = req.body;
    try {
      const updatedOrder = await ordersService.updateOrder(
        parseInt(id),
        orderData
      );
      if (updatedOrder) {
        res.json(updatedOrder);
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    }
  }

  async deleteOrder(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedOrder = await ordersService.deleteOrder(parseInt(id));
      if (deletedOrder) {
        res.json(deletedOrder);
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    }
  }
}
