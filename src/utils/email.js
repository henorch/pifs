import emailjs from "@emailjs/browser"


 
export const sendEmail = ({cartItems}) => {
    const items = JSON.stringify(cartItems);
        var templateParams = {
            name: 'PIFS',
            message: items,
        };
         
        emailjs.send('service_cwbp5bl', 'template_5cfyt2h', 
        templateParams,
        'kWHmNrwAR1miSNO_B')
            .then(function(response) {
               alert("We have recieve your order, we will get back to you as soon as possible")
            }, function(error) {
               console.log('FAILED...', error);
            });
        }
