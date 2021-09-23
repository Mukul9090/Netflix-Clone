import axios from 'axios';
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>


const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",    
});

export default instance;