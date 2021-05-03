const fetch = require('node-fetch')


getStates = () => {
    fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states')
    .then(data => data.json())
    .then(states => {
        states.states.forEach(state => {
            console.log(state.state_name);
        });
    });

}


// getStates();


getAllCenters = () => {

    const pincodes = ['831001','831002','831003','831004','831005','831006','831007','831008','831009','831010  ','831011',
                     '831012','831013','831014','831015','831016','831017','831018','831019','831302','832107','832108','832109','832110']


    pincodes.forEach(pincode => {
        fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode="+pincode+"&date=06-05-2021")
        .then(data => data.json())
        .then(json => {
            if(json.centers)
            {
                json.centers.forEach(j => {
                    console.log(j.block_name, ':', j.name, ':', j.pincode)
                })
            }
        })
    })


    
}

// getAllCenters()


getDistricts = () => {
     
    fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=831002&date=05-05-2021')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });
}



getDistricts()







