import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export async function getVehicles() {
  const { data, error } = await supabase
    .from('vehicles')
    .select('*')
    .eq('available', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching vehicles:', error);
    return [];
  }

  return data || [];
}

export async function createLead(
  nombre: string,
  email: string,
  telefono: string,
  vehiculo: string,
  mensaje: string
) {
  const { data, error } = await supabase
    .from('leads')
    .insert([{ nombre, email, telefono, vehiculo, mensaje }] as any)
    .select();

  if (error) {
    console.error('Error creating lead:', error);
    throw error;
  }

  return data;
}
