import pipe from 'pipedrive';
import api from '../services/blingApi';

class DealsController {
  async index(req, res) {
    pipe.Configuration.apiToken = process.env.PIPEDRIVE_APITOKEN;

    const wonDeals = await pipe.DealsController.getAllDeals({
      status: 'won',
    });

    return res.json(wonDeals);
  }

  async bling(req, res) {}
}

export default new DealsController();
