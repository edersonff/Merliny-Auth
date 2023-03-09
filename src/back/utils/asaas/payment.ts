import { asaasapitoken, debugapp } from "../../config";
import asaasAPI from "asaas-sdk";
import PaymentModel from "../../Model/Payment";
let params = {
  environment: asaasAPI.SANDBOX,
  apiKey: asaasapitoken,
  version: "v3",
  debug: debugapp,
};

export default class Payment {
  constructor() {
    asaasAPI.config(params);
  }
  createCustomer = async (data: any, user: any) => {
    try {
      const response = await asaasAPI.customer.create(data);
      user?.update({ customerID: response.id });
      return response;
    } catch (error) {
      throw error;
    }
  };
  getCustomer = async (id: string) => {
    try {
      const response = await asaasAPI.customer.get(id);
      return response;
    } catch (error) {
      throw error;
    }
  };
  createPayment = async (data: any) => {
    try {
      const response = await asaasAPI.payment.create(data);
      PaymentModel.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  };
  getPayment = async (id: string) => {
    try {
      const response = await asaasAPI.payment.get(id);
      return response;
    } catch (error) {
      throw error;
    }
  };
  getPayments = async (data: any) => {
    try {
      const response = await asaasAPI.payment.list(data);
      return response;
    } catch (error) {
      throw error;
    }
  };
  updatePayment = async (id: string, data: any) => {
    try {
      const response = await asaasAPI.payment.update(id, data);
      return response;
    } catch (error) {
      throw error;
    }
  };
  deletePayment = async (id: string) => {
    try {
      const response = await asaasAPI.payment.delete(id);
      return response;
    } catch (error) {
      throw error;
    }
  };
}
