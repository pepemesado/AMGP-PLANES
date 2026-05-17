export interface Database {
  public: {
    Tables: {
      vehicles: {
        Row: {
          id: string;
          brand: string;
          model: string;
          year: number | null;
          price: number | null;
          km: number | null;
          image_url: string | null;
          available: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          brand: string;
          model: string;
          year?: number | null;
          price?: number | null;
          km?: number | null;
          image_url?: string | null;
          available?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          brand?: string;
          model?: string;
          year?: number | null;
          price?: number | null;
          km?: number | null;
          image_url?: string | null;
          available?: boolean;
          created_at?: string;
        };
      };
      leads: {
        Row: {
          id: string;
          nombre: string;
          email: string;
          telefono: string | null;
          vehiculo: string | null;
          mensaje: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          nombre: string;
          email: string;
          telefono?: string | null;
          vehiculo?: string | null;
          mensaje?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          nombre?: string;
          email?: string;
          telefono?: string | null;
          vehiculo?: string | null;
          mensaje?: string | null;
          created_at?: string;
        };
      };
    };
  };
}
