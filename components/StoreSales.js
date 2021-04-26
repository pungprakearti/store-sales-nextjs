import Form from './Form'

const StoreSales = () => {
  const d = new Date()
  const date = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`

  return (
    <div className='StoreSales'>
      <h1>
        Entering sales for {date}
      </h1>
      <Form date={date}/>
    </div>
  )
}

export default StoreSales
