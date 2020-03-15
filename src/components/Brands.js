import React, { useEffect, useState } from "react"
import styled from 'styled-components'
//import zajecarsko from '../images/zajecarsko-logo.png'
import { fetchBrands } from "../services/fetchBrands" 

const StyledDiv = styled.div`
    height: 70vh;
    background-color: #01012b;
    padding: 10px 180px;

    h2{
        height: 53px;
        font-family: Bitter;
        font-size: 44px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ebebeb;
    }
    
    .brands-flex-container{
        display: flex;
        flex-wrap: wrap;
        height: 60%;
        div{
            width: 16.66%;
            img{
                width: 50%;
            }
        }
    }
    .brands-pagination{
      
        .dot {
            height: 12px;
            width: 12px;            
            background-color: rgba(255,255,255,0.5);
            border-radius: 50%;
            display: inline-block;
            margin: auto;
            margin-right: 1%;
            
        }
        .dot.active {
            background-color: #fff;
        }

        .dot:hover {
            background-color: rgb(137, 163, 212);
            transition-duration: 1s;
        }
    }
`

export const Brands = () => {
    //const array = [zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko]
    const [items, setItems] = useState([])
    useEffect(() => {
        (async function () {
            const x = await fetchBrands();
            setItems(x.sort(compareByPriority))
        })();
    }, []);


    const [brandsPerPage,setBrandsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastBrand = currentPage * brandsPerPage;
    const indexOfFirstBrand = indexOfLastBrand - brandsPerPage;
    const currentBrands = items.slice(indexOfFirstBrand, indexOfLastBrand);
    const numberOfPages = Math.ceil(items.length / brandsPerPage);

    const pageNumbers = [];
       for (let i = 1; i < numberOfPages + 1; i++){
           pageNumbers.push(i);
       }

    const handleClick = event => {
        //clearInterval(this.slidesInterval);
        setCurrentPage(Number(event.target.id));
    };


    const handleCurrentPage = (value) => {
           setCurrentPage(value);
       };
   
    const changePage = () => {
       //const { brands, brandsPerPage, currentPage} = this.state;
       var numberOfPages = Math.ceil(items.length / brandsPerPage);
          if (currentPage === numberOfPages){
            handleCurrentPage(1);
          }
          else {  
            handleCurrentPage(currentPage + 1);
          }

   }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <div className={currentPage === number ? 'dot active': 'dot'}
                 key={number}
                 id={number}
                 onClick={handleClick}
                 >
            </div>
        );
    });

    function compareByPriority( a, b ) {
        if ( a.priority > b.priority ){
          return -1;
        }
        if ( a.priority < b.priority ){
          return 1;
        }
        return 0;
      }

    return(
        <StyledDiv>
            <h2>Brendovi</h2>
            
            
                    <div className="brands-flex-container">
                     
                        {currentBrands.map(brand => ( brand.status === 'active' ? 
                        <div key={brand.id}><img src={brand.imageUrl} alt={brand.name} title={brand.name}/></div>
                        :
                        null))}
                      
                    </div>
                    <br/>
                    <div className="brands-pagination">
                        {renderPageNumbers}
                    </div>
            
        </StyledDiv>
    )
}

// <Pagination items={items}/>