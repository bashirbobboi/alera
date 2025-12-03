import { BatteryMedium, BellRing, CircleCheck, Lightbulb, MapPinned, Wifi, ShieldCheck, CircleX, CheckCircle, BatteryWarning } from "lucide-react-native";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const emergencyContacts = [
  { id: '1', name: 'Sarah Johnson', imageUri: 'https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '2', name: 'Sarah Johnson', imageUri: 'https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '3', name: 'Sarah Johnson', imageUri: 'https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: '4', name: 'Sarah Johnson', imageUri: 'https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D' },
];

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#F4F4F2]">
      <ScrollView
      className="flex-1"
      contentContainerStyle={{ paddingBottom: 100, marginTop: 30 }}
      showsVerticalScrollIndicator={false}
      >
      <View className="flex flex-col px-6 gap-8">
        <View className="flex flex-col gap-2 items-center justify-center">
          <ShieldCheck size={26} color="#00563b" />
          <Text className="text-[#00563b] text-2xl font-dm-sans-semibold">ALERA</Text>
        </View>
        <View className="flex flex-row items-center gap-4">
          <ShieldCheck size={26} color="black" />
          <Text className="text-black text-2xl font-outfit-bold">System Active</Text>
          <Text className="text-gray-500 text-base font-outfit-medium">Last Connection: Just now</Text>
        </View>
        <View className="flex flex-col gap-8 border border-black-100 rounded-2xl p-4">
          
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Text className="text-black text-2xl font-outfit-bold">Device Status</Text>
            </View>
            
            <View className="flex-row items-center">
              <Text className="text-red-500 text-base font-outfit-bold bg-red-500/10 rounded-full px-2 py-1">High Priority</Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex flex-col gap-2 items-center">
              <Wifi size={30} color="black" />
              <Text className="text-black text-xl font-outfit-bold">Excellent</Text>
              <Text className="text-gray-500 text-sm font-outfit-bold">Conntection Status</Text>
            </View>     
            <View className="flex flex-col gap-2 items-center">
              <BatteryMedium size={30} color="black" />
              <Text className="text-black text-xl font-outfit-bold">84%</Text>
              <Text className="text-gray-500 text-sm font-outfit-bold">Battery Level</Text>
            </View>     
            <View className="flex flex-col gap-2 items-center">
              <MapPinned size={30} color="black" />
              <Text className="text-black text-xl font-outfit-bold">Location Ready</Text>
              <Text className="text-gray-500 text-sm font-outfit-bold"> GPS</Text>
            </View>     
          </View>
        </View>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-col gap-4 bg-red-500 rounded-2xl py-4 px-10 items-center justify-center">
            <BellRing size={30} color="white" />
            <Text className="text-white text-2xl font-outfit-bold">Send Alert</Text> 
          </View>
          <View className="flex flex-col gap-4 bg-white/70 rounded-2xl py-4 px-14 items-center justify-center">
            <CircleCheck size={30} color="black" />
            <Text className="text-black text-2xl font-outfit-bold">I'm Safe</Text> 
          </View>
        </View>
        <TouchableOpacity className="flex flex-row gap-2 items-center justify-center border border-black-100 rounded-2xl p-4">
          <Lightbulb size={24} color="black" />
          <Text className="text-black text-xl font-outfit-bold">Test System</Text>
        </TouchableOpacity>
        <View>
          <Text className="text-black text-2xl font-playfair-semibold">Emergency Contacts</Text>
          <FlatList
            data={emergencyContacts}
            horizontal
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 24, paddingTop: 24 }}
            renderItem={({ item }) => (
              <View className="flex flex-col gap-4 items-center">
                <Image source={{ uri: item.imageUri }} className="w-20 h-20 rounded-full" />
                <Text className="text-black text-base font-outfit-medium">{item.name}</Text>
              </View>
            )}
          />
        </View>
        <View>
          <Text className="text-black text-2xl font-playfair-semibold">Recent Alerts</Text>
          <View className="flex flex-row gap-8 mt-4">
            <View className="pt-4">
              <ShieldCheck size={26} color="black" />
            </View>
            <View className="flex flex-col">
              <Text className="text-black-100 text-lg font-outfit-medium">System Check - All Systems Operational</Text>
              <Text className="text-gray-500 text-base font-outfit-medium">Just now</Text>
            </View>
          </View>
          <View className="w-full bg-black/10 h-[2px] mt-2"/>  
          <View className="flex flex-row gap-8 mt-4">
            <View className="pt-4">
              <CircleX size={26} color="red" />
            </View>
            <View className="flex flex-col">
              <Text className="text-black-100 text-lg font-outfit-medium">False Alarm Cancelled</Text>
              <Text className="text-gray-500 text-base font-outfit-medium">Yesterday</Text>
            </View>
          </View>
          <View className="w-full bg-black/10 h-[2px] mt-2"/>  
          <View className="flex flex-row gap-8 mt-4">
            <View className="pt-4">
              <BellRing size={26} color="red" />
            </View>
            <View className="flex flex-col">
              <Text className="text-black-100 text-lg font-outfit-medium">Emergenct Alert Sent</Text>
              <Text className="text-gray-500 text-base font-outfit-medium">2 days ago</Text>
            </View>
          </View>
          <View className="w-full bg-black/10 h-[2px] mt-2"/>
          <View className="flex flex-row gap-8 mt-4">
            <View className="pt-4">
              <BatteryWarning size={26} color="black" />
            </View>
            <View className="flex flex-col">
              <Text className="text-black-100 text-lg font-outfit-medium">Battery Low Alert</Text>
              <Text className="text-gray-500 text-base font-outfit-medium">3 days ago</Text>
            </View>
          </View>  
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);
}
