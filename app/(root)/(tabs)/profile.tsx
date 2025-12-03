import { Activity, AlertTriangle, Calendar, CheckCircle2, Edit2, Heart, MapPin, ShieldCheck } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
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
            <Text className="text-[#00563b] text-lg font-dm-sans-bold uppercase tracking-widest">Account</Text>
            <Text className="text-black text-4xl font-playfair-semibold">My Profile</Text>
          </View>

          {/* User Card */}
          <View className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 flex-row items-center gap-6">
            <Image
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D' }}
              className="w-24 h-24 rounded-full"
            />
            <View className="flex-1 gap-1">
              <Text className="text-black text-2xl font-outfit-bold">Sarah Johnson</Text>
              <Text className="text-gray-500 font-outfit-medium">Member since 2023</Text>
              <TouchableOpacity className="flex-row items-center gap-2 mt-2 bg-gray-100 self-start px-3 py-1.5 rounded-full">
                <Edit2 size={14} color="black" />
                <Text className="text-black text-xs font-outfit-bold">Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Health Profile */}
          <View className="flex flex-col gap-4">
            <Text className="text-black text-xl font-outfit-bold">Medical ID</Text>
            <View className="flex-row gap-4">
              <View className="flex-1 bg-white p-4 rounded-2xl border border-black/5 gap-2">
                <Heart size={24} color="#dc2626" />
                <Text className="text-gray-500 text-xs font-outfit-bold uppercase">Blood Type</Text>
                <Text className="text-black text-xl font-outfit-bold">O+</Text>
              </View>
              <View className="flex-1 bg-white p-4 rounded-2xl border border-black/5 gap-2">
                <Activity size={24} color="#00563b" />
                <Text className="text-gray-500 text-xs font-outfit-bold uppercase">Condition</Text>
                <Text className="text-black text-xl font-outfit-bold">Parkinson's</Text>
              </View>
              <View className="flex-1 bg-white p-4 rounded-2xl border border-black/5 gap-2">
                <Calendar size={24} color="#2563eb" />
                <Text className="text-gray-500 text-xs font-outfit-bold uppercase">Age</Text>
                <Text className="text-black text-xl font-outfit-bold">68</Text>
              </View>
            </View>
          </View>

          {/* Activity Log */}
          <View className="flex flex-col gap-4">
            <Text className="text-black text-xl font-outfit-bold">Activity History</Text>
            <View className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 gap-6">

              {/* Item 1 */}
              <View className="flex-row gap-4">
                <View className="items-center">
                  <View className="bg-green-100 p-2 rounded-full z-10">
                    <ShieldCheck size={20} color="#00563b" />
                  </View>
                  <View className="w-[2px] h-full bg-gray-100 absolute top-8" />
                </View>
                <View className="flex-1 pb-4">
                  <Text className="text-black text-lg font-outfit-bold">System Check Passed</Text>
                  <Text className="text-gray-500 text-sm font-outfit-medium">All sensors operational. Battery at 92%.</Text>
                  <Text className="text-gray-400 text-xs font-outfit-medium mt-1">Today, 9:41 AM</Text>
                </View>
              </View>

              {/* Item 2 */}
              <View className="flex-row gap-4">
                <View className="items-center">
                  <View className="bg-blue-100 p-2 rounded-full z-10">
                    <MapPin size={20} color="#2563eb" />
                  </View>
                  <View className="w-[2px] h-full bg-gray-100 absolute top-8" />
                </View>
                <View className="flex-1 pb-4">
                  <Text className="text-black text-lg font-outfit-bold">Location Update</Text>
                  <Text className="text-gray-500 text-sm font-outfit-medium">Arrived at Home Zone.</Text>
                  <Text className="text-gray-400 text-xs font-outfit-medium mt-1">Yesterday, 6:30 PM</Text>
                </View>
              </View>

              {/* Item 3 */}
              <View className="flex-row gap-4">
                <View className="items-center">
                  <View className="bg-orange-100 p-2 rounded-full z-10">
                    <AlertTriangle size={20} color="#d97706" />
                  </View>
                  <View className="w-[2px] h-full bg-gray-100 absolute top-8" />
                </View>
                <View className="flex-1 pb-4">
                  <Text className="text-black text-lg font-outfit-bold">Fall Detected (False Alarm)</Text>
                  <Text className="text-gray-500 text-sm font-outfit-medium">Cancelled by user within 10s.</Text>
                  <Text className="text-gray-400 text-xs font-outfit-medium mt-1">Nov 28, 2:15 PM</Text>
                </View>
              </View>

              {/* Item 4 */}
              <View className="flex-row gap-4">
                <View className="items-center">
                  <View className="bg-gray-100 p-2 rounded-full z-10">
                    <CheckCircle2 size={20} color="gray" />
                  </View>
                </View>
                <View className="flex-1">
                  <Text className="text-black text-lg font-outfit-bold">Manual Check-in</Text>
                  <Text className="text-gray-500 text-sm font-outfit-medium">User confirmed safety status.</Text>
                  <Text className="text-gray-400 text-xs font-outfit-medium mt-1">Nov 27, 8:00 AM</Text>
                </View>
              </View>

            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;