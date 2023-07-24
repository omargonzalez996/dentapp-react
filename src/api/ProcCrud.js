import { supabase } from "./connection";

export async function getProcedimientos() {
    try {
        const { data, error } = await supabase.from('Procedimiento').select('*')
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.log('Error fetching Citas: ', error.message);
        return null;
    }
}

