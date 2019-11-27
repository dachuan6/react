import React ,{Component} from "react";
import HeadNav from '../../common/HeadNav'
import{Route} from "react-router-dom";
// import AppD from "../../shou/shou"
import Home from "../../routes/Home/Home"
import About from "../../routes/About/About"
import Article from "../../routes/Article/Article"
import Resource from "../../routes/Resource/Resource"

export default class DefaultLayout extends Component{
    render(){
        return(
            <div id="DefaultLayout">
               <HeadNav>
              
               </HeadNav>
               <div className="content-wrap">
                    <Route path={this.props.match.url+"/"} component={Home} exact />
                    {/* <Route path="/home" component={DefaultLayout} /> */}
                    <Route path={this.props.match.url+"/about"} component={About} />
                    <Route path={this.props.match.url+"/article"} component={Article} />
                    <Route path={this.props.match.url+"/resource"} component={Resource} />
                   </div>
            </div>
        )
    }
}