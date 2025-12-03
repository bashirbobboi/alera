import { Activity, Bell, ChevronRight, Lock, LogOut, ShieldAlert, Smartphone, User, Volume2 } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Setting = () => {
  const [fallDetection, setFallDetection] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

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
            <Text className="text-[#00563b] text-lg font-dm-sans-bold uppercase tracking-widest">Configuration</Text>
            <Text className="text-black text-4xl font-playfair-semibold">Settings</Text>
          </View>

          {/* Safety Preferences */}
          <View className="flex flex-col gap-4">
            <Text className="text-black text-xl font-outfit-bold">Safety Sensitivity</Text>
            <View className="bg-white rounded-3xl p-2 shadow-sm border border-black/5">

              <View className="p-4 flex-row items-center justify-between border-b border-black/5">
                <View className="flex-row gap-4 items-center flex-1">
                  <View className="bg-red-100 p-3 rounded-full">
                    <Activity size={24} color="#dc2626" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-black text-lg font-outfit-bold">Fall Detection</Text>
                    <Text className="text-gray-500 text-sm font-outfit-medium">Auto-trigger alert on impact</Text>
                  </View>
                </View>
                <Switch
                  value={fallDetection}
                  onValueChange={setFallDetection}
                  trackColor={{ false: '#e5e5e5', true: '#00563b' }}
                  thumbColor={'white'}
                />
              </View>

              <TouchableOpacity className="p-4 flex-row items-center justify-between">
                <View className="flex-row gap-4 items-center flex-1">
                  <View className="bg-orange-100 p-3 rounded-full">
                    <ShieldAlert size={24} color="#d97706" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-black text-lg font-outfit-bold">Alert Delay</Text>
                    <Text className="text-gray-500 text-sm font-outfit-medium">15 Seconds before notifying contacts</Text>
                  </View>
                </View>
                <ChevronRight size={20} color="gray" />
              </TouchableOpacity>

            </View>
          </View>

          {/* Notifications */}
          <View className="flex flex-col gap-4">
            <Text className="text-black text-xl font-outfit-bold">Notifications</Text>
            <View className="bg-white rounded-3xl p-2 shadow-sm border border-black/5">

              <View className="p-4 flex-row items-center justify-between border-b border-black/5">
                <View className="flex-row gap-4 items-center flex-1">
                  <View className="bg-blue-100 p-3 rounded-full">
                    <Bell size={24} color="#2563eb" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-black text-lg font-outfit-bold">Push Notifications</Text>
                    <Text className="text-gray-500 text-sm font-outfit-medium">System updates & alerts</Text>
                  </View>
                </View>
                <Switch
                  value={pushNotifs}
                  onValueChange={setPushNotifs}
                  trackColor={{ false: '#e5e5e5', true: '#00563b' }}
                  thumbColor={'white'}
                />
              </View>

              <View className="p-4 flex-row items-center justify-between">
                <View className="flex-row gap-4 items-center flex-1">
                  <View className="bg-green-100 p-3 rounded-full">
                    <Smartphone size={24} color="#00563b" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-black text-lg font-outfit-bold">SMS Alerts</Text>
                    <Text className="text-gray-500 text-sm font-outfit-medium">Send texts to emergency contacts</Text>
                  </View>
                </View>
                <Switch
                  value={smsAlerts}
                  onValueChange={setSmsAlerts}
                  trackColor={{ false: '#e5e5e5', true: '#00563b' }}
                  thumbColor={'white'}
                />
              </View>

            </View>
          </View>

          {/* General Settings */}
          <View className="flex flex-col gap-4">
            <Text className="text-black text-xl font-outfit-bold">General</Text>
            <View className="bg-white rounded-3xl p-2 shadow-sm border border-black/5">

              <TouchableOpacity className="p-4 flex-row items-center justify-between border-b border-black/5">
                <View className="flex-row gap-4 items-center">
                  <View className="bg-gray-100 p-3 rounded-full">
                    <User size={24} color="black" />
                  </View>
                  <Text className="text-black text-lg font-outfit-bold">Account Profile</Text>
                </View>
                <ChevronRight size={20} color="gray" />
              </TouchableOpacity>

              <TouchableOpacity className="p-4 flex-row items-center justify-between border-b border-black/5">
                <View className="flex-row gap-4 items-center">
                  <View className="bg-gray-100 p-3 rounded-full">
                    <Lock size={24} color="black" />
                  </View>
                  <Text className="text-black text-lg font-outfit-bold">Privacy & Security</Text>
                </View>
                <ChevronRight size={20} color="gray" />
              </TouchableOpacity>

              <TouchableOpacity className="p-4 flex-row items-center justify-between">
                <View className="flex-row gap-4 items-center">
                  <View className="bg-gray-100 p-3 rounded-full">
                    <Volume2 size={24} color="black" />
                  </View>
                  <Text className="text-black text-lg font-outfit-bold">Sound & Haptics</Text>
                </View>
                <ChevronRight size={20} color="gray" />
              </TouchableOpacity>

            </View>
          </View>

          {/* App Info & Logout */}
          <View className="flex flex-col gap-4 mb-8">
            <TouchableOpacity className="flex-row items-center justify-center gap-2 bg-white border border-red-100 py-4 rounded-2xl">
              <LogOut size={20} color="#dc2626" />
              <Text className="text-red-600 text-lg font-outfit-bold">Log Out</Text>
            </TouchableOpacity>
            <Text className="text-center text-gray-400 font-outfit-medium text-sm">Alera App v1.0.2 (Build 45)</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Setting;