import axios from 'axios';

const token = process.env.PIPEDRIVE_APITOKEN;

const pipedriveApi = axios.create({
  baseURL: `https://api.pipedrive.com/v1/deals?status=won&start=0&api_token=${token}`,
});

export default pipedriveApi;
