import './App.css';
import { useState } from 'react';
import HomeScreen from './Screens/HomeScreen';
import Navbar from './Components/Navbar';
import SmartBulbScreen from './Screens/SmartBulbScreen';
import HandyOutletScreen from './Screens/HandyOutletScreen';
import TemperatureMonitorScreen from './Screens/TemperatureMonitorScreen';
import NewProduct from './Screens/NewProduct';

function App() {
  const [pageStatus, setPageStatus] = useState("homeScreen")

  function bulbWorkaround() {
    if (pageStatus !== "SmartBulb") {
      setPageStatus("SmartBulb")
    }
  }
  
  function outletWorkaround() {
    if (pageStatus !== "HandyOutlet") {
      setPageStatus("HandyOutlet")
    }
  }

  function temperatureWorkaround() {
    if (pageStatus !== "TemperatureMonitor") {
      setPageStatus("TemperatureMonitor")
    }
  }

  function newProductWorkaround() {
    if (pageStatus !== "NewProduct") {
      setPageStatus("NewProduct")
    }
  }

  function homeWorkaround() {
    if (pageStatus !== "homeScreen") {
      setPageStatus("homeScreen")
    }
  }

  if (pageStatus === "homeScreen") {
  return (
      <>
        <div className='appWrapper'>
          <Navbar bulb={() => bulbWorkaround()} outlet={() => outletWorkaround()} temperature={() => temperatureWorkaround()} newProduct={() => newProductWorkaround()} home={() => homeWorkaround()} />
          <HomeScreen />
        </div>
      </>
    );
  }

  if (pageStatus === "SmartBulb") {
    return (
        <>
          <div className='appWrapper'>
            <Navbar bulb={() => bulbWorkaround()} outlet={() => outletWorkaround()} temperature={() => temperatureWorkaround()} newProduct={() => newProductWorkaround()} home={() => homeWorkaround()} />
            <SmartBulbScreen />
          </div>
        </>
      );
    }

    if (pageStatus === "HandyOutlet") {
      return (
          <>
            <div className='appWrapper'>
              <Navbar bulb={() => bulbWorkaround()} outlet={() => outletWorkaround()} temperature={() => temperatureWorkaround()} newProduct={() => newProductWorkaround()} home={() => homeWorkaround()} />
              <HandyOutletScreen />
            </div>
          </>
        );
      }

      if (pageStatus === "TemperatureMonitor") {
        return (
            <>
              <div className='appWrapper'>
                <Navbar bulb={() => bulbWorkaround()} outlet={() => outletWorkaround()} temperature={() => temperatureWorkaround()} newProduct={() => newProductWorkaround()} home={() => homeWorkaround()} />
                <TemperatureMonitorScreen />
              </div>
            </>
          );
        }

        if (pageStatus === "NewProduct") {
          return (
              <>
                <div className='appWrapper'>
                  <Navbar bulb={() => bulbWorkaround()} outlet={() => outletWorkaround()} temperature={() => temperatureWorkaround()} newProduct={() => newProductWorkaround()} home={() => homeWorkaround()} />
                  <NewProduct />
                </div>
              </>
            );
          }
}

export default App;
