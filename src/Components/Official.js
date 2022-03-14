import React from 'react'
import data from '../Data.json'

export const Official = () => {
  const accounts = data  && data.map(item=> item.products.map(i => i.product_detail))
  console.log(accounts.map(i=> i))
  return (
    <div className='content'>
    <section className='row'>
    <div className='col-lg-2' >
    <nav id='sidebar'>

    <ul className='sidebar-nav'>
        <li className='sidebar-item'>
            <span>Home</span>
        </li>
        <li className='sidebar-item'>
            <span>Billing</span>
        </li>
    </ul>

    </nav>
    </div>
    <div className='col-lg-10 bg-light'>
    <h3 className='Billing'><strong>Billing</strong></h3>
    <p className='Billing-paragraph'>Overview of your Accounts</p>
    <hr/>
    <div className='boxes'>
    <div className='row'>
    {data && data.map(i => 
    <div className='col-md-3'>
    <div className='box box-1'>
    <h6 className='heading'>{i.business_name}<span>Active</span></h6>
    <p className='acc'>Account ID:{i.account_id}</p>

    </div>
      
    </div>
    )}

      
    </div>
    </div>
    <hr/>

    <div className='second-content'>
    <div className='container'>
    <div className='row'>
      <div className='col-lg-7'>
        <div className='payment-details'>
        <div className='card rounded-1' >
          <h5 className='Payment-text'>Payment Details</h5>
          <p className='view-text'>View deatils of your next invoice and payment.</p>
          <hr/>
          <h5 className='invoice'>Next invoice: 10 Feb 2022</h5>
          <div className='row'>
          <div className='col-lg-5'>
            <div className='inner-card bg-light'>
            <p className='acc'><strong>Current Balance</strong></p>
            <h3>£59.00</h3>
            <div className='pay'>
            <span className='fas fa-lock'></span>
            <p>This is a secure 256-bit SSL encrypted payment. You are safe.</p>
            </div>
              <h6 className='btn btn-primary'>Pay Now</h6>
            </div>
          </div>
          <div className='col-lg-5'>
          <div className='inner-card-2 bg-light'>
        <h5 className='Payment-text'>Payment method
        <span>Annual</span></h5>
            <div className='pay'>
            <span className='fas fa-lock'></span>
            <p>Guide:To manage your payments more easily, we recommend switching to Direct Debit.</p>
            </div>
              <h6 className='btn btn-primary'>Switch to Direct Debit</h6>
            </div>


          </div>
          </div>
        </div>
          
        </div>

        </div>

      <div className='col-lg-4'>
        <div className='card rounded-1' id='bx'>
          <h5 className='Payment-text'>My products</h5>
          <p className='view-text'>All your products at a glance.</p>
          <hr/>
          <div className='products-kind'>
          <div className="d-flex flex-column bd-highlight mb-3" >
          {data && data.map(item=>
            <div className="p-2 bd-highlight item m-3" key={item.account_id+3} ><i className="fa-solid fa-phone"></i><span key={item.account_id+3}>{item.products.map(i=> i.product_kind)} - {item.products.map(i=> i.product_detail)}</span></div>

          )}
            </div>
            </div>

          </div>
        </div>

    </div>

    </div>

    </div>
    <div className='billing-card mt-4'>
    <div className='container'>
    <div className='row'>
      <div className='col-lg-12'>
      <div className='card rounded billing-container'>
      <h5 className='Payment-text'>Billing history</h5>
          <p className='view-text'>Choose a billing plan to see more details.</p>
          <hr/>
          <table className="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Type</th>
      <th scope="col">Amount</th>
      <th scope="col">Balance</th>
      <th scope="col">Reference</th>
      <th scope="col">Downlad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>13 Dec 2021</td>
      <td>Invoice</td>
      <td>£8.00</td>
      <td>£45.00</td>
      <td>8993UDEJ</td>
      <td><img src="https://img.icons8.com/fluency/96/000000/download.png" id='download'/></td>
    </tr>
    <tr>
      <td>13 Dec 2021</td>
      <td>Invoice</td>
      <td>£8.00</td>
      <td>£45.00</td>
      <td>8993UDEJ</td>
      <td><img src="https://img.icons8.com/fluency/96/000000/download.png" id='download'/></td>
    </tr>
    <tr>
      <td>13 Dec 2021</td>
      <td>Invoice</td>
      <td>£8.00</td>
      <td>£45.00</td>
      <td>8993UDEJ</td>
       <td><img src="https://img.icons8.com/fluency/96/000000/download.png" id='download'/></td>
      
    </tr>
    <tr>
    <td>13 Dec 2021</td>
      <td>Invoice</td>
      <td>£8.00</td>
      <td>£45.00</td>
      <td>8993UDEJ</td>
       <td><img src="https://img.icons8.com/fluency/96/000000/download.png" id='download'/></td>
    </tr>
    <tr>
    <td>13 Dec 2021</td>
      <td>Invoice</td>
      <td>£8.00</td>
      <td>£45.00</td>
      <td>8993UDEJ</td>
       <td><img src="https://img.icons8.com/fluency/96/000000/download.png" id='download'/></td>
    </tr>
    <tr>
    <td>13 Dec 2021</td>
      <td>Invoice</td>
      <td>£8.00</td>
      <td>£45.00</td>
      <td>8993UDEJ</td>
       <td><img src="https://img.icons8.com/fluency/96/000000/download.png" id='download'/></td>
    </tr>
  </tbody>
</table>
    <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">2</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">3</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">4</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">4</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">5</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">5</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">6</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">7</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">8</a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

      </div>

      </div>
    </div>

    </div>

    </div>

    </div>
    </section>

    </div>
  )
}
