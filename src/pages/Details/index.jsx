import Footer from "../../components/Footer"
import { ScrollView, View, ViewPrincipal, Text } from "./style"

export default function Details() {
    return (
        <View>
            <ScrollView>
                <ViewPrincipal>
                    <Text>Test</Text>
                </ViewPrincipal>
            </ScrollView>
            <Footer/>
        </View>
    )
}