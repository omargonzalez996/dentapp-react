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

export async function addProcedimiento(nombre, descripcion) {
    try {
        const { data, error } = await supabase.from('Procedimiento').insert([{ nombre, descripcion }])
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.log('Error fetching Citas: ', error.message);
        return null;
    }
}

export async function editProcedimiento(id, nombre, descripcion, activo) {
    try {
        const { data, error } = await supabase.from('Procedimiento').update([{ nombre, descripcion, activo }]).eq('id', id)
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.log('Error fetching Citas: ', error.message);
        return null;
    }
}

// export async function insertCita(paciente_id, procedimiento_id, fecha, hora) {
//     try {
//         const { data, error } = await supabase.from('Cita').insert([{ paciente_id, procedimiento_id, fecha, hora }])
//         if (error) {
//             throw new Error(error.message);
//         }
//         return data;
//     } catch (error) {
//         console.log('Error fetching Citas: ', error.message);
//         return null;
//     }
// }
