import React from 'react';

class FirstClass extends React.Component
{
    constructor(){
        super()
        this.state = {
            count:0,
            name:'John',
            numbers:[0,1,2,3,4,5,6,7,8],
            size:4
        }
        this.countNumber = this.countNumber.bind(this);
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                count: 2
            })
        },4000);
    }

    componentDidUpdate(prevalue){
        if(this.props.Address != prevalue.Address){
            //do something
        }
    }

    componentWillUnmount(){
        // this is used for clean up.
    }
    getSnapshotBeforeUpdate(){
        // called before component is updated, should be seldomly used or not used atall
    }
    shouldComponentUpdate(nextProps,nextState){
        return this.props.data !== nextProps.title
        // used to let react know that component should not be updated..
    }
    countNumber(){
        //alert('function called');
        var name = this.state.name;
        var count = this.state.count;
        var len = this.state.size;
        var c = '';
        if(count > 0){
            c = count;
            name = name.substr(0,len);
        }
        this.setState((prevalue)=>{
            //console.log(prevalue.count)
           return{count: prevalue.count + 1,
                  name: name + c}
        });
    }
    render(){
        const styles ={
            backgroundColor:"black",
            border:"none",
            color:"white",
            padding:"15px 32px",
            testAlign:"center",
            textDecoration:"none",
            display:"inline-block",
            fontSize:"16px"
        }
        return(
            <div>
                <h4>my First class for {this.state.name } number {this.state.count} </h4>
                <button style={styles} onClick={this.countNumber}>count</button>
            </div>

        )
    }
}

export default FirstClass