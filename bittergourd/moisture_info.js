
class MoistureInfo extends React.Component {

    render() {
      return <div>  <h1 style={{color:'green'}}>{this.props.msg}   <a style={{fontSize:20,color:'black'}}>{new Date().toLocaleTimeString()}</a></h1>   </div>
    }
  }
  
  
  function tick() {  
    // const domContainer = document.querySelector('#moisture_textarea_container');
    // ReactDOM.render(e(SoilConditionText, { msg: 'Moisture is good' }, null), domContainer);
    ReactDOM.render(
      <MoistureInfo msg='Soild moisture is good.'/>, 
      document.getElementById("moisture_textarea_container")
  );
  }
  
  setInterval(tick, 1000);