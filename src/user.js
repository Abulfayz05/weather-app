async function load(sahifa) {
  try {
        const response = await fetch(`https://reqres.in/api/users?page=${sahifa}`);
        const result_1 = await response.json();
        return result_1.data;
    } catch (err) {
        console.log(err);
    }
}

export default load;

