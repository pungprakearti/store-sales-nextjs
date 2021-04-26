const Form = (date) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handle submit')
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="gas87">87:</label>
            <input type="number" id="gas87" name="gas87" />
          </li>
          <li>
            <label htmlFor="gas89">89:</label>
            <input type="number" id="gas89" name="gas89" />
          </li>
          <li>
            <label htmlFor="gas91">91:</label>
            <input type="number" id="gas91" name="gas91" />
          </li>
          <li>
            <label htmlFor="totalFuelSales">Total Fuel Sales:</label>
            <input type="number" id="totalFuelSales" name="totalFuelSales" />
          </li>
          <li>
            <label htmlFor="taxable">Taxable:</label>
            <input type="number" id="taxable" name="taxable" />
          </li>
          <li>
            <label htmlFor="snackShop">Snack Shop:</label>
            <input type="number" id="snackShop" name="snackShop" />
          </li>
          <li>
            <label htmlFor="salesTax">Sales Tax:</label>
            <input type="number" id="salesTax" name="salesTax" />
          </li>
          <li>
            <label htmlFor="cashOnHand">Cash On Hand:</label>
            <input type="number" id="cashOnHand" name="cashOnHand" />
          </li>
        </ul>
        <button>next</button>
      </form>
    </div>
  )
}

export default Form
