// pages/api/projects.js
import { supabase } from '../../utils/supabaseClient';

export default async function handler(req, res) {
  const { id } = req.query;

  // Fetch specific project if 'id' is provided, otherwise fetch all projects
  const query = id
    ? supabase.from('projects').select('*').eq('id', id).single()
    : supabase.from('projects').select('*');

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ error: 'Error fetching data' });
  }

  res.status(200).json(data);
}
