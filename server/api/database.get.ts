import { supabase } from '../supabase'
export default defineEventHandler(async () => {
	// Make a fetch to Supabase to get data
	const { data, error } = await supabase
		.from('my_table')
		.select()
	return { data, error };
})