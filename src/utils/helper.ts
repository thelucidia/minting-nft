import DeviceDetector from 'device-detector-js'

export const trimAddress = (address: `0x${string}`) => `${address.substring(0, 5)}...${address.substring(address.length - 4)}`;

export const isSSR = () => typeof window === 'undefined'

export const isWindowAvailable = (): boolean => {
    return !isSSR()
  }
  
  export const isIOS = () => {
    if (isWindowAvailable() && window?.navigator?.userAgent) {
      const osType = new DeviceDetector().parse(window.navigator.userAgent).os?.name
      return osType === 'iOS'
    }
    return false
  }
  
  export const isDesktop = () => {
    if (isWindowAvailable() && window?.navigator?.userAgent) {
      const deviceType = new DeviceDetector().parse(window.navigator.userAgent).device?.type
      return deviceType === 'desktop'
    }
    return false
  }