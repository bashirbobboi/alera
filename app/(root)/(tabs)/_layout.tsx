import { Tabs } from 'expo-router'
import { Home, Search, User, HardDrive, Settings } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'

const TabIcon = ({focused, icon: Icon, title}: {focused: boolean, icon: any, title: string}) => (
    <View className="flex-1 mt-3 flex flex-col items-center">
        <Icon size={24} color='#666876' />
        <Text className={`${focused ? 'text-black font-dm-sans-medium' : 'text-black-100 font-dm-sans'} text-xs w-full text-center mt-1`}>{title}</Text>
    </View>
)

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'absolute',
                borderTopColor: '#0061FF1A',
                minHeight: 70,

            }
        }}
        
    >
      <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <TabIcon icon={Home} focused={focused} title='Home' />
            )
          }}
      />
      <Tabs.Screen
          name='devices'
          options={{
            title: 'Device',
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <TabIcon icon={HardDrive} focused={focused} title='Device' />
            )
          }}
      />     
      <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <TabIcon icon={User} focused={focused} title='Profile' />
            )
          }}
      />
      <Tabs.Screen
          name='settings'
          options={{
            title: 'Setting',
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <TabIcon icon={Settings} focused={focused} title='Setting' />
            )
          }}
      />
    </Tabs>
  )
}

export default TabsLayout