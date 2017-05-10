//@flow

import type { Emit, On } from 'eventemitter2'
import type { AsyncStorage } from '../../plugins'
import type { PublicKey } from '../main/index.h'
import type { NetworkerType } from '../networker'

export type Bytes = number[]

export type LeftOptions = {
  dcID?: number,
  createNetworker?: boolean,
  fileDownload?: boolean,
  fileUpload?: boolean
}

export type Cached<Model> = {
  [id: number]: Model
}

export type Cache = {
  uploader: Cached<NetworkerType>,
  downloader: Cached<NetworkerType>,
  auth: Cached<*>,
  servers: Cached<string | false>,
  keysParsed: Cached<PublicKey>,
}

export interface ApiManagerInstance {
  (method: string): Promise<any>,
  (method: string, params: Object): Promise<any>,
  (method: string, params: Object, options: LeftOptions): Promise<any>,
  storage: AsyncStorage,
  setUserAuth(dc: number, userAuth: any): Promise<void>,
  on: On,
  emit: Emit,
  bus: *
}

export type RequestOptions = {|
  networker?: NetworkerType,
  dc: number,
  storage: AsyncStorage,
  getNetworker: (dcID: number, options: LeftOptions) => Promise<NetworkerType>,
  netOpts: { [arg: string]: * }
|}

export type { NetworkerType } from '../networker'
