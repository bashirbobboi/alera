import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Watch, CircleDot, Plus, BatteryMedium, Wifi, MapPin, ChevronRight, Smartphone } from 'lucide-react-native';

const Device = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F4F4F2]">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100, marginTop: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-col px-6 gap-8">
          {/* Header */}
          <View className="flex flex-col gap-2">
            <Text className="text-[#00563b] text-lg font-dm-sans-bold uppercase tracking-widest">Hardware</Text>
            <Text className="text-black text-4xl font-playfair-semibold">My Devices</Text>
          </View>

          {/* Primary Device - Wearable */}
          <View className="flex flex-col gap-4">
            <Text className="text-black text-xl font-outfit-bold">Primary Wearable</Text>
            <View className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
              <View className="flex-row justify-between items-start mb-6">
                <View className="flex-row gap-4 items-center">
                  <View className="bg-[#00563b]/10 p-3 rounded-full">
                    <Watch size={32} color="#00563b" />
                  </View>
                  <View>
                    <Text className="text-black text-xl font-outfit-bold">Alera Band Pro</Text>
                    <Text className="text-green-600 text-sm font-outfit-medium">● Connected</Text>
                  </View>
                </View>
                <BatteryMedium size={24} color="black" />
              </View>

              <View className="flex-row gap-4 justify-between">
                <View className="flex-1 bg-[#F4F4F2] p-4 rounded-2xl items-center gap-2">
                  <BatteryMedium size={24} color="#00563b" />
                  <Text className="text-black font-outfit-bold text-lg">84%</Text>
                  <Text className="text-gray-500 text-xs font-outfit-medium">Battery</Text>
                </View>
                <View className="flex-1 bg-[#F4F4F2] p-4 rounded-2xl items-center gap-2">
                  <Wifi size={24} color="#00563b" />
                  <Text className="text-black font-outfit-bold text-lg">Strong</Text>
                  <Text className="text-gray-500 text-xs font-outfit-medium">Signal</Text>
                </View>
                <View className="flex-1 bg-[#F4F4F2] p-4 rounded-2xl items-center gap-2">
                  <MapPin size={24} color="#00563b" />
                  <Text className="text-black font-outfit-bold text-lg">Active</Text>
                  <Text className="text-gray-500 text-xs font-outfit-medium">GPS</Text>
                </View>
              </View>
              
              <TouchableOpacity className="mt-6 border-t border-black/5 pt-4 flex-row justify-between items-center">
                <Text className="text-black font-outfit-medium">Manage Device Settings</Text>
                <ChevronRight size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Home Buttons */}
          <View className="flex flex-col gap-4">
            <Text className="text-black text-xl font-outfit-bold">Home Buttons</Text>
            
            {/* Button 1 */}
            <View className="bg-white rounded-2xl p-4 flex-row items-center justify-between shadow-sm border border-black/5">
              <View className="flex-row gap-4 items-center">
                <View className="bg-orange-100 p-3 rounded-full">
                  <CircleDot size={24} color="#d97706" />
                </View>
                <View>
                  <Text className="text-black text-lg font-outfit-bold">Master Bedroom</Text>
                  <Text className="text-gray-500 text-sm font-outfit-medium">Last checked: 2h ago</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <View className="bg-green-100 px-2 py-1 rounded-full">
                  <Text className="text-green-700 text-xs font-outfit-bold">Active</Text>
                </View>
              </View>
            </View>

            {/* Button 2 */}
            <View className="bg-white rounded-2xl p-4 flex-row items-center justify-between shadow-sm border border-black/5">
              <View className="flex-row gap-4 items-center">
                <View className="bg-blue-100 p-3 rounded-full">
                  <CircleDot size={24} color="#2563eb" />
                </View>
                <View>
                  <Text className="text-black text-lg font-outfit-bold">Living Room</Text>
                  <Text className="text-gray-500 text-sm font-outfit-medium">Last checked: 5h ago</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <View className="bg-green-100 px-2 py-1 rounded-full">
                  <Text className="text-green-700 text-xs font-outfit-bold">Active</Text>
                </View>
              </View>
            </View>
             {/* Button 3 */}
             <View className="bg-white rounded-2xl p-4 flex-row items-center justify-between shadow-sm border border-black/5">
              <View className="flex-row gap-4 items-center">
                <View className="bg-purple-100 p-3 rounded-full">
                  <CircleDot size={24} color="#7c3aed" />
                </View>
                <View>
                  <Text className="text-black text-lg font-outfit-bold">Kitchen</Text>
                  <Text className="text-gray-500 text-sm font-outfit-medium">Last checked: 1d ago</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <View className="bg-red-100 px-2 py-1 rounded-full">
                  <Text className="text-red-700 text-xs font-outfit-bold">Low Batt</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Connected Phone */}
          <View className="flex flex-col gap-4">
             <Text className="text-black text-xl font-outfit-bold">Paired Phone</Text>
             <View className="bg-white rounded-2xl p-4 flex-row items-center justify-between shadow-sm border border-black/5">
              <View className="flex-row gap-4 items-center">
                <View className="bg-gray-100 p-3 rounded-full">
                  <Smartphone size={24} color="black" />
                </View>
                <View>
                  <Text className="text-black text-lg font-outfit-bold">iPhone 15 Pro</Text>
                  <Text className="text-gray-500 text-sm font-outfit-medium">This Device</Text>
                </View>
              </View>
              <Text className="text-green-600 text-sm font-outfit-bold">Connected</Text>
            </View>
          </View>

          {/* Add Device Button */}
          <TouchableOpacity className="flex-row items-center justify-center gap-2 bg-[#00563b] py-4 rounded-2xl mt-4 shadow-lg shadow-green-900/20">
            <Plus size={24} color="white" />
            <Text className="text-white text-lg font-outfit-bold">Add New Device</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Device;