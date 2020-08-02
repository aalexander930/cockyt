const axios = require('axios');

function typeAhead(search) {
  if (!search) return;

  const searchInput = search.querySelector('input[name="q"]');

  searchInput.addEventListener('input', function() {
    console.log(this.value)


  if (!this.value) {
    return;
  } 
  axios
    .get(`/api/v1/search?q=${this.value}`)
    .then(res => {
      console.log(res.data)
    })
  })
}

export default typeAhead;