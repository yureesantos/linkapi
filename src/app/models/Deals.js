import { Schema, model } from 'mongoose';

const DealsSchema = new Schema({
  title: { type: String, required: true },
  value: { type: Number, required: true },
  status: { type: String, required: true },
  won_time: { type: Date, required: true },
});

export default model('deals', DealsSchema);
