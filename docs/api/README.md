# @bahn-x/cmp-sdk

## Table of contents

### Interfaces

- [CmpOptions](interfaces/cmpoptions.md)
- [Consent](interfaces/consent.md)
- [ConsentChangeListener](interfaces/consentchangelistener.md)
- [OnConsentChangeCallback](interfaces/onconsentchangecallback.md)
- [Service](interfaces/service.md)

### Functions

- [acceptService](README.md#acceptservice)
- [consentChangeListener](README.md#consentchangelistener)
- [getConsentForService](README.md#getconsentforservice)
- [getService](README.md#getservice)
- [getServices](README.md#getservices)
- [init](README.md#init)
- [isInitialized](README.md#isinitialized)
- [rejectService](README.md#rejectservice)
- [showConsentLayer](README.md#showconsentlayer)
- [showSecondLayer](README.md#showsecondlayer)

## Functions

### acceptService

▸ **acceptService**(`id`: *string*): *Promise*<void\>

A method for accepting a single service.

**`example`** 
```typescript
import { acceptService } from '@bahn-x/cmp-sdk';
acceptService('service_id').then(() => {
  // do something
});
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* | service id   |

**Returns:** *Promise*<void\>

___

### consentChangeListener

▸ **consentChangeListener**(`callback`: [*OnConsentChangeCallback*](interfaces/onconsentchangecallback.md)): [*ConsentChangeListener*](interfaces/consentchangelistener.md)

Returns listener object to allow listening to consent change events (either an actual change or simply a button click: "save selection" or "save all" etc.).

**`example`** 
```typescript
import { consentChangeListener } from '@bahn-x/cmp-sdk';
// React
useEffect(() => {
   const handler = (error, services) => {
     if (error) console.error(error);
     console.log('consent change', services);
   };
   const listener = consentChangeListener(handler);
   // start listener on component mount
   listener.start();
   // stop listener on unmount
   return () => {
      listener.stop();
   }
}, [])
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callback` | [*OnConsentChangeCallback*](interfaces/onconsentchangecallback.md) | Error-first callback   |

**Returns:** [*ConsentChangeListener*](interfaces/consentchangelistener.md)

___

### getConsentForService

▸ **getConsentForService**(`id`: *string*): [*Consent*](interfaces/consent.md) \| *undefined*

Returns the consent for a service.

**`example`** 
```typescript
import { getConsentForService } from '@bahn-x/cmp-sdk';
const consent = getConsentForService('service_id');
if (consent && consent.status) {
  // has consent
}
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* | service id   |

**Returns:** [*Consent*](interfaces/consent.md) \| *undefined*

___

### getService

▸ **getService**(`id`: *string*): [*Service*](interfaces/service.md) \| *undefined*

Returns a service by id.

**`example`** 
```typescript
import { getService } from '@bahn-x/cmp-sdk';
const service = getService('service_id');
if (service) {
  // do something
}
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* | service id   |

**Returns:** [*Service*](interfaces/service.md) \| *undefined*

___

### getServices

▸ **getServices**(): [*Service*](interfaces/service.md)[]

Returns list of services configured in the CMP.
List can be empty if no services could be found.

**`example`** 
```typescript
import { getServices } from '@bahn-x/cmp-sdk';
const services = getServices();
services.map((service) => {
  // do something
});
```

**Returns:** [*Service*](interfaces/service.md)[]

___

### init

▸ **init**(): *Promise*<void\>

Initializes the SDK. Returns an empty Promise, indicating that the SDK is ready to use.

**`example`** 
```typescript
import { init } from '@bahn-x/cmp-sdk';
init().then(() => console.log('SDK is initialized'));
```

**Returns:** *Promise*<void\>

___

### isInitialized

▸ **isInitialized**(): *boolean*

Returns true if CMP is initialized and false if not.

**`example`** 
```typescript
import { isInitialized } from '@bahn-x/cmp-sdk';
if (isInitialized()) {
  // do something
};
```

**Returns:** *boolean*

___

### rejectService

▸ **rejectService**(`id`: *string*): *Promise*<void\>

A method for rejecting a single service.

**`example`** 
```typescript
import { rejectService } from '@bahn-x/cmp-sdk';
rejectService('service_id').then(() => {
  // do something
});
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* | service id   |

**Returns:** *Promise*<void\>

___

### showConsentLayer

▸ **showConsentLayer**(): *Promise*<void\>

Displays the consent layer.

**`example`** 
```typescript
import { showConsentLayer } from '@bahn-x/cmp-sdk';
showConsentLayer();
```

**Returns:** *Promise*<void\>

___

### showSecondLayer

▸ **showSecondLayer**(): *Promise*<void\>

Displays the second layer of the consent layer, offering direct access to the service settings.

**`example`** 
```typescript
import { showSecondLayer } from '@bahn-x/cmp-sdk';
showSecondLayer();
```

**Returns:** *Promise*<void\>
