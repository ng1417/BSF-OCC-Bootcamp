//callback
const getData = (callback) => {
    setTimeout(() => {
        const data = 'This is the data.';
        callback(data);

    },6000);
}

const processData = (data) => {
    console.log('Processed Data:', data)
}

getData(processData);