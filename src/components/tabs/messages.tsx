const Messages = () => {

    const messageList  = []

    for(let i=0; i<500; i++){
        messageList.push(<Message m={`this is message ${i}`} key={i}/>)
    }

    return (
      <div>{messageList}</div>
    )
  }
  
  export default Messages

  const Message = ({m}:{
    m:string
  }) => {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // Do nothing for 1 ms per item to emulate extremely slow code
    }
    return <p>{m}</p>
  }