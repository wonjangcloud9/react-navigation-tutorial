import React from "react";
import { View } from "react-native";
import { Badge } from "./Badge";
import { Icon } from "./Icons";

// export class TabIcon extends React.Component{

//     render(){
//         if(this.props.visibleBadge){
//             return (
//                 <View>
//                     <Badge fontSize={10}>
//                         <Icon
//                             name={this.props.iconName}
//                             size={20}
//                             color={'black'}/>
//                     </Badge>

//                 </View>
//             )
//         }

//         return (
//             <View>
//                 <Icon
//                     name={this.props.iconName}
//                     size={20}
//                     color={'black'}/>
//             </View>
//         )
//     }
// }

export const TabIcon = (props) => {
  console.log("======");
  console.log(props);
  console.log("======");
  if (props.visibleBadge) {
    return (
      <Badge fontSize={10}>
        <Icon name={props.iconName} size={20} color={"black"} />
      </Badge>
    );
  }

  return <Icon name={props.iconName} size={20} color={"black"} />;
};
