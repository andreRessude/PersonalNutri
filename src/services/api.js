export async function buscarPratos() {
    try {
      const response = await fetch('http://192.168.0.34:3000/pratos');
      if (!response.ok) {
        throw new Error('Erro ao buscar pratos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar pratos:', error);
      throw error;
    }
}
