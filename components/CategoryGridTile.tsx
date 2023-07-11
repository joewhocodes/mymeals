import { Pressable, Text, View } from "react-native";

interface CatergoryGridTileProps {
    title: string;
    color: string;
}

const CategoryGridTile = (props: CatergoryGridTileProps) => {
    return ( 
        <View>
            <Pressable>
                <View>
                    <Text>{props.title}</Text>
                </View>
            </Pressable>
        </View>
     );
}
 
export default CategoryGridTile;