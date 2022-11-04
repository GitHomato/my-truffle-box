import { useEffect, useState } from 'react'
import Web3 from 'web3'
import artifact from '../../contracts/CoffeePortal.json';

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

export default function CoffeePortal() {
    const [account, setAccount] = useState('')
    const [balance, setBalance] = useState(0)
    const [network, setNetwork] = useState(0)
    const [contract, setContract] = useState(0)
    const [totalCoffee, setTotalCoffee] = useState(0)

    useEffect(() => {

        async function loadAccountAndContract() {
            // We load the account being connected
            const accounts = await web3.eth.requestAccounts()
            const _account = accounts[0]
            setAccount(_account)

            // We get the network type
            const network = await web3.eth.net.getNetworkType()
            setNetwork(network)

            // We load the balance for the account and format the balance
            const balance = await web3.eth.getBalance(_account)
            setBalance((balance / 1e18).toFixed(4))

            // We connect to the contact
            const networkID = await web3.eth.net.getId();
            const { abi } = artifact;
            try {
                const address = artifact.networks[networkID].address
                const contract = new web3.eth.Contract(abi, address);
                console.log(contract);
                setContract(contract)
            } catch (err) {
                console.error(err);
            }
        }

        loadAccountAndContract()

    }, [])

    const getTotalCoffee = async () => {
        const totalCoffee = await contract.methods.getTotalCoffee().call()
        setTotalCoffee(totalCoffee)
    }

    const getAllCoffees = () => {
        // todo write getAllCoffees

    }

    return (
        <div className="container">

            <ul>
                <li><strong>My account:</strong> {account}</li>
                <li><strong>Network:</strong> {network}</li>
                <li><strong>Balance:</strong> {balance}</li>
            </ul>

            <div>
                {totalCoffee > 0
                    ? <>Thanks I got {totalCoffee} coffee(s)</>
                    : <>I am thirsty, please give me something!</>
                }
            </div>

            <button className='btn btn-primary' onClick={getTotalCoffee}>Fetch number of coffee</button>
            <button className='btn btn-primary' onClick={getAllCoffees}>get all coffees</button>
        </div>
    )
}