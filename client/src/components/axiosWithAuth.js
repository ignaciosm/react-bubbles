import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        barseURL: 'http://localhost:5000',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};

  
// import axios from 'axios';

// export const axiosWithAuth = () => {
//     const token = localStorage.getItem('token');

//     return axios.create({
//         barseURL: 'http://localhost:5000',
//         headers: {
//             Authorization: token
//         }
//     });
// };