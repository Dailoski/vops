import React from "react"
import styled from 'styled-components'
import cheers from '../images/cheers.png'


const StyledDiv = styled.div`
    height: fit-content;
    width: 100%;
    ${props => props.absolute && "position: absolute; top: 15vw; left: 10vw;"}
    max-width: 100%;
    text-align: initial;
    margin: auto;
    .cheers-image {        
           width: fit-content;
           margin: auto;
     
        img {
            width: 10vw;
            height: 10vh;
            object-fit: contain;
           
        }
    }
    .order-text {
        h1{
            text-align: initial;
            font-family: Bitter;
            font-size: 36px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #000000;
            text-align: center; 
        }
        p {
            width: 355px;
            height: 29px;
            font-family: Poppins;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4e4e59;
            text-align: center;
            margin: auto;
            margin-bottom: 5vh;
        }
    }
    .wrapper {
        width: 49vw;
        margin: auto;
        .wrapper-top {
            width: 49vw;
            height: 28vh;
            margin-bottom: 2vh;

            .Rectangle-18 {
                width: 24vw;
                height: 28vh;
                border: solid 1px #c8c8c8;
                background-color: #ffffff;
                float:left;
                padding-left: 1vw;
                padding-top: 3vh;
                padding-bottom: 0;
                .orderId {
                    p {
                        margin-block-start: 0;
                        margin-block-end: 0;
                    }
                }
                .orderAmount{
                    margin-top: 3vh;
                   p {
                    float: left;
                    margin-block-start: 0;
                    margin-block-end: 0;
                   }
                   b {
                     float: right;
                     margin-right: 4vw;
                     width: 91px;
                     height: 18px;
                     font-family: Poppins;
                     font-size: 16px;
                     font-weight: bold;
                     font-stretch: normal;
                     font-style: normal;
                     line-height: normal;
                     letter-spacing: normal;
                     color: #01012b;
                   }
                  
                }
                .paymentType{
                       margin-top: 10vh;
                    p {
                        margin-block-start: 0;
                        margin-block-end: 0;
                    }
                   }
            }

            .Rectangle-17 {
                width:  24vw;
                height: 28vh;
                border: solid 1px #c8c8c8;
                background-color: #ffffff;
                float:left;
                margin-left: 1vw;
               
                .title {
                    width: 167px;
                    height: 28px;
                    font-family: Poppins;
                    font-size: 18px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    color: #01012b;
                    margin-top: 2vh;
                    margin-left: 2vw;
                }
                .deliveryData {
                    margin-top: 2vh;
                    margin-left: 2vw;
                    .date {

                    }
                    .time {
                        margin-top: 2vh;
                    }
                    .address {
                        margin-top: 2vh;
                    }
                }
            } 
            
        }
        .Rectangle-19 {
            width: 49vw;
            height: ${(props) => (props.order.length*3)+25}vh;
            
            border: solid 1px #c8c8c8;
            background-color: #ffffff;
            clear:both;
            margin-bottom: 5vh;   
            .table {
                width: 100%;
                margin-top: 2vh;
                border-spacing: 1vh;
            
            }
            .last {
                display: inline-block;
                margin-top: 3vh;
                margin-left: 3vw;
                width: 80%;
                .delivery {
                    width: 100%;
                    p {
                        float: left;
                        margin-block-start: 0;
                        margin-block-end: 0;
                    }
                    b {
                        float: right;
                    }  
                }
                .total {  
                    margin-top: 5vh;
                    p { 
                        margin-block-start: 0;
                        margin-block-end: 0;
                        float: left;
                    }
                    b {
                     float: right;
                    }
                }
            }
        }
    }
    .info {
        width: 49vw;
        height: 28vh;
        margin: auto;
      p {
            font-family: Poppins;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #4e4e59;
            
      }
    }
     
`

export const Order = ({absolute, text, title, dark, small}) => {


    const [orderId, setOrderId] = React.useState('id porudžbine');
    const [orderTotal, setOrderTotal] = React.useState(180.98);
    const [deliveryDate, setDeliveryDate] = React.useState('30. januar 2020.');
    const [deliveryTime, setDeliveryTime] = React.useState('od 18:00h do 21:00h');
    const [deliveryAddress, setDeliveryAddress] = React.useState('Kruševačka 20, Beograd, 11000');

    const [order, setOrder] = React.useState([{
          "key" : "fiwjaisid2",
          "imgUrl" : "https://firebasestorage.googleapis.com/v0/b/daj-pivo.appspot.com/o/lav.png?alt=media&token=b58d002a-0ca3-428b-858a-380d850fe5cd",
          "name" : "Kruševice limenka",
          "price" : 103.99,
          "quantity" : 1,
          "volume" : 0.5
        },
         {
          "key" : "kgggdkp",
          "imgUrl" : "https://firebasestorage.googleapis.com/v0/b/daj-pivo.appspot.com/o/zajecarsko.jpg?alt=media&token=ada983c1-20dd-4a03-b503-28a0e687c404",
          "name" : "Zaječarsko limenka",
          "price" : 76.99,
          "quantity" : 1,
          "volume" : 0.5
        }
    ]);


    const [deliveryPrice, setDeliveryPrice] = React.useState(250.00);

    return(
        <StyledDiv absolute={absolute} dark={dark} small={small} order={order}>
            <div className="cheers-image">
                <img src={cheers} alt="Cheers!" />
            </div>
            <div className="order-text">
                <h1>Hvala na Vašoj porudžbini!</h1>
                <p>Detalje porudžbine možete pogledati ispod.</p>
            </div>
           <div className="wrapper">
                <div className="wrapper-top">
                        <div className="Rectangle-18">
                           <div className="orderId">
                                <p>Šifra porudžbine</p>
                                <b>{orderId}</b>
                            </div>
                            <div className="orderAmount">
                                <p>Ukupno</p>
                                <b>{orderTotal} RSD</b>
                            </div>

                            <div className="paymentType">
                                <p>Vrsta plaćanja</p>
                                <p>Plaćanje po isporuci (Keš)</p>
                            </div>
                        </div>
                        <div className="Rectangle-17">
                            <div className="title">Podaci o isporuci</div>
                            <div className="deliveryData">
                                <div className="date"><b>Datum isporuke</b></div>
                                <div className="date-value">{deliveryDate}</div>
                                <div className="time"><b>Vreme isporuke</b></div>
                                <div className="time-value">{deliveryTime}</div>
                                <div className="address"><b>Adresa isporuke</b></div>
                                <div className="address-value">{deliveryAddress}</div>
                            </div>
                        </div>
                </div>
                <div className="Rectangle-19">
                    <table className="table" >
                        <thead>
                            <tr>
                                <th align="left" style={{paddingLeft: '2vw'}}>Opis proizvoda</th>
                                <th align="left"> Količina</th>
                                <th align="left">Cena</th>
                            </tr>
                        </thead>
                        <tbody>
                        {order.map(row => (
                            <tr key={row.key}>
                            <td align="left" style={{paddingLeft: '2vw'}}>
                                {row.name} {row.volume}
                            </td>
                            <td align="left">{row.quantity}</td>
                            <td align="left">{row.price} RSD</td>
                            </tr> 
                        ))}
                        </tbody>
                    </table>
                    <div className="last">
                        <div className="delivery">
                            <p>Dostava</p>
                            <b>{deliveryPrice} RSD</b>
                        </div>
                        <div className="total">
                            <p><b>Ukupno</b></p>
                            <b>{deliveryPrice + orderTotal} RSD</b>
                        </div>
                    </div>
                </div>
           </div>
           <div className="info">
                <div>
                    <p>
                    Ukoliko imate bilo kakva pitanja u vezi porudžbine, možete nas kontaktirati putem naše kontakt forme koja se nalazi <strong>ovde</strong>.
                    </p>
                </div>
                <div>
                    <p>Pogledajte <b>Uslove kupovine.</b></p>
                </div>
           </div>
            
        </StyledDiv>
    )
}