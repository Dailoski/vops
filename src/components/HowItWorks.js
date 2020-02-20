import React from "react"
import styled from 'styled-components'

const StyledDiv = styled.div`
margin-top: 80px;
        h2{
            width: 235px;
            height: 53px;
            font-family: Bitter;
            font-size: 44px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #01012b;
            margin: auto
        }
        .flex-container{
            display: flex;
            justify-content: center;
            width: 100%;
            span{
                width: 25%;
                margin: 1%;
                h3{
                    height: 36px;
                    font-family: Poppins;
                    font-size: 24px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    color: #01012b;
                }
                p{
                    width: 90%;
                }
            }
            span:nth-child(2){
                margin-top: 100px;
            }
        }
`

export const HowItWorks = () => (
    <StyledDiv>
        <h2>Kako Radi?</h2>
        <div className="flex-container">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="86" height="87" fill="none" viewBox="0 0 86 87">
                    <path fill="#FFBC21" d="M19.77 27.108c3.253 0 5.891-2.658 5.891-5.938s-2.638-5.938-5.891-5.938c-3.254 0-5.892 2.659-5.892 5.938 0 3.28 2.638 5.938 5.892 5.938z" />
                    <path fill="#2F2F4F" d="M18.73 51.191c.338.305.763.454 1.188.454.436 0 .87-.16 1.214-.475.763-.707 18.704-17.488 18.704-31.09C39.836 9.006 30.902 0 19.918 0S0 9.005 0 20.076C0 34.28 17.966 50.504 18.73 51.19zm1.188-47.577c9.006 0 16.332 7.384 16.332 16.462 0 10.156-12.403 23.328-16.352 27.268-3.966-3.836-16.312-16.642-16.312-27.268 0-9.078 7.326-16.462 16.332-16.462z" />
                    <path fill="#2F2F4F" d="M28.145 20.959c0-4.57-3.688-8.288-8.222-8.288-4.534 0-8.222 3.718-8.222 8.288s3.688 8.287 8.222 8.287c4.534 0 8.223-3.712 8.223-8.287zm-12.863 0c0-2.577 2.08-4.673 4.636-4.673s4.636 2.096 4.636 4.673c0 2.576-2.08 4.673-4.636 4.673s-4.636-2.092-4.636-4.673zM84.288 17.747a1.78 1.78 0 0 0-1.578-.29l-27.464 8.077-9.36-3.883-1.368 3.34 9.939 4.126c.02.01.04.01.061.02v11.278h3.586V28.456l23.31-6.852v52.88l-23.31 8.174V60.742h-3.586v22.028l-25.65-7.755v-9.558h-3.586v9.599L4.319 82.1V43.942H.732v40.662c0 .584.277 1.126.743 1.467.466.34 1.066.433 1.614.247l24.021-8.07 28.694 8.674a1.765 1.765 0 0 0 1.107-.02l26.895-9.429a1.807 1.807 0 0 0 1.204-1.709V19.193a1.835 1.835 0 0 0-.722-1.446z" />
                    <path fill="#2F2F4F" d="M73.75 57.966c-1.67-3.925-4-7.038-6.747-9.01l-2.08 2.942c2.208 1.586 4.124 4.178 5.533 7.493l3.294-1.425zM61.573 50.329l.835-3.517a11.815 11.815 0 0 0-5.984.104c-2.556.702-4.79 2.282-6.444 3.578l2.197 2.855c1.399-1.09 3.248-2.41 5.195-2.948a8.337 8.337 0 0 1 4.2-.072zM46.184 53.592c-1.86 1.482-3.863 2.897-5.948 3.212l.528 3.573c2.914-.439 5.399-2.158 7.643-3.955l-2.223-2.83zM35.061 59.974l.794-3.526c-4.293-.982-7.71-3.357-7.745-3.383l-2.055 2.964c.16.119 4.006 2.804 9.006 3.945z" />
                </svg>
                <h3>Unesi svoje podatke</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero justo, volutpat a ligula sed, semper consequat urna. Aliquam lacinia odio a dignissim iaculis.</p>
            </span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="79" fill="none" viewBox="0 0 81 79">
                    <path fill="#FFBC21" d="M25.538 31.394c.516 3.088-2.311 4.632-5.16 4.632-2.847 0-5.674-1.544-5.159-4.632.424-2.522 2.312-4.632 5.16-4.632 2.848 0 4.736 2.11 5.159 4.632zM45.66 31.394c.515 3.088-2.312 4.632-5.16 4.632-2.848 0-5.675-1.544-5.16-4.632.424-2.522 2.312-4.632 5.16-4.632 2.848 0 4.736 2.11 5.16 4.632zM65.78 31.394c.516 3.088-2.311 4.632-5.159 4.632s-5.675-1.544-5.16-4.632c.424-2.522 2.312-4.632 5.16-4.632 2.848 0 4.736 2.11 5.16 4.632z" />
                    <path fill="#2F2F4F" d="M79.194 32.68h-2.063V8.493c0-.993-.81-1.801-1.806-1.801h-8.833V5.306C66.492 2.234 64.47 0 61.684 0h-2.26c-2.78 0-4.798 2.234-4.798 5.306v1.385h-8.255V5.306C46.371 2.234 44.35 0 41.563 0h-2.26c-2.78 0-4.798 2.234-4.798 5.306v1.385h-8.131V5.306C26.374 2.234 24.352 0 21.571 0h-2.26c-2.78 0-4.803 2.234-4.803 5.306v1.385H6.19c-.996 0-1.806.808-1.806 1.8v24.19h-2.58C.81 32.68 0 33.489 0 34.482V77.2C0 78.192.81 79 1.806 79h77.388C80.19 79 81 78.192 81 77.199V34.482c0-.993-.81-1.801-1.806-1.801zM73.52 10.294v22.13h-1.93c-.603-2.599-2.027-5.476-3.962-7.89a5.109 5.109 0 0 1-1.135-3.185V10.293h7.027zM58.237 5.306c0-.515.114-1.703 1.187-1.703h2.26c1.078 0 1.197 1.188 1.197 1.703v16.042c0 .088.01.18.01.268h-2.786v3.602h3.704c.279.55.61 1.081.996 1.57 1.388 1.734 2.471 3.777 3.044 5.635H53.243c.568-1.93 1.662-4.045 3.044-5.753a8.699 8.699 0 0 0 1.95-5.456V5.306zm-3.611 4.987v10.921a5.114 5.114 0 0 1-1.15 3.196 21.317 21.317 0 0 0-3.003 5.039 21.898 21.898 0 0 0-2.967-4.915 5.109 5.109 0 0 1-1.135-3.186V10.293h8.255zm-16.51 10.921V5.306c0-.515.114-1.703 1.187-1.703h2.26c1.078 0 1.197 1.188 1.197 1.703v16.042c0 .088.01.18.01.268H40.5v3.602h3.188c.279.55.61 1.081.996 1.57 1.388 1.734 2.471 3.777 3.044 5.635h-14.6c.567-1.93 1.66-4.045 3.043-5.753a8.723 8.723 0 0 0 1.945-5.456zm-3.611-10.92v10.92a5.114 5.114 0 0 1-1.15 3.196 21.326 21.326 0 0 0-2.941 4.89 21.754 21.754 0 0 0-2.9-4.766 5.125 5.125 0 0 1-1.14-3.186V10.293h8.131zM16.175 26.67a8.702 8.702 0 0 0 1.944-5.456V5.306c0-.515.119-1.703 1.192-1.703h2.26c1.073 0 1.191 1.188 1.191 1.703v16.042c0 .088.01.18.01.268h-1.877v3.602h2.801c.279.55.61 1.081 1.001 1.57 1.393 1.734 2.472 3.777 3.039 5.635H13.13c.568-1.924 1.667-4.045 3.044-5.753zM7.996 10.293h6.51v10.921c0 1.148-.407 2.28-1.145 3.196-1.945 2.414-3.374 5.337-3.967 8.013H7.997v-22.13zm69.391 65.104H3.611V36.283H77.388v39.114z" />
                    <path fill="#2F2F4F" d="M40.5 41.43c-8.394 0-15.22 6.809-15.22 15.182 0 8.374 6.826 15.183 15.22 15.183 8.394 0 15.22-6.81 15.22-15.183 0-8.373-6.826-15.182-15.22-15.182zm0 26.762c-6.403 0-11.608-5.193-11.608-11.58 0-6.387 5.205-11.58 11.608-11.58 6.403 0 11.608 5.194 11.608 11.58 0 6.387-5.205 11.58-11.608 11.58zM20.637 54.554h-8.77v3.602h8.77v-3.602zM68.876 54.554h-8.771v3.602h8.77v-3.602z" />
                </svg>
                <h3>Izaberi pivo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero justo, volutpat a ligula sed, semper consequat urna. Aliquam lacinia odio a dignissim iaculis.</p>
            </span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="84" fill="none" viewBox="0 0 90 84">
                    <path fill="#FFBC21" d="M14.839 53.454l23.25 24.423s11.367-10.393 10.85-21.305c0 0-22.733 1.559-33.067-4.157l-1.033 1.04z" />
                    <path fill="#2F2F4F" d="M57.01 33.329l-.036 3.637h.372c6.557 0 12.592-1.766 17.929-5.258l-1.969-3.05c-4.836 3.159-10.333 4.712-16.296 4.67z" />
                    <path fill="#2F2F4F" d="M90 33.298L56.896 0 54.34 2.572l3.276 3.295c-1.742 1.377-4.408 3.855-6.805 7.565-3.364 5.207-6.763 13.89-4.568 26.205-11.656-1.865-20.01 1.133-25.11 4.136-3.772 2.224-6.309 4.734-7.72 6.36l-2.98-2.998-2.558 2.573 33.109 33.297 2.557-2.572-3.151-3.17c1.617-1.418 4.112-3.97 6.324-7.763 2.991-5.129 5.967-13.536 4.112-25.254 12.24 2.209 20.88-1.216 26.056-4.593 3.69-2.411 6.154-5.093 7.523-6.844l3.044 3.06L90 33.299zM47.007 43.467c.755 3.99.92 7.566.677 10.761-5.818 1.47-16.332 2.422-29.678-3.679 4.34-4.058 13.64-10.018 29.001-7.082zM37.826 74.69L17.608 54.353c8.06 3.508 15.165 4.61 20.91 4.61 3.395 0 6.304-.39 8.67-.89-1.793 9.307-7.006 14.633-9.362 16.618zm12.245-34.3c-4.092-19.408 6.49-29.219 10.111-31.937l21.634 21.757c-2.723 3.596-12.628 14.254-31.745 10.18zM35.537 11.598H0v3.637h35.537v-3.637z" />
                    <path fill="#2F2F4F" d="M36.803 25.218H6.908v3.637h29.895v-3.637z" />
                </svg>
                <h3>Udobno se smesti</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero justo, volutpat a ligula sed, semper consequat urna. Aliquam lacinia odio a dignissim iaculis.</p>
            </span>
        </div>
    </StyledDiv>

)