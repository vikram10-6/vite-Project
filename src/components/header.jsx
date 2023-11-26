import React from "react";

class HeaderComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav>
                <div className="lefth">
                    <h1><strong>K</strong>ata<strong>K</strong>limt</h1>
                    <p>Photography</p>
                </div>
                <div className="hright">
                    <ul>
                        {
                            this.props.Links?.map((v,i) =>{
                                return (    
                                        <li>
                                            <a href={i}>{v.name}</a>
                                        </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default HeaderComp;