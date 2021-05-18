[@bahn-x/cmp-sdk](docs/api/README.md) / OnConsentChangeCallback

# Interface: OnConsentChangeCallback

Callback for consent change listener.

## Callable

▸ **OnConsentChangeCallback**(`error`: *null* \| Error, `services?`: [*Service*](docs/api/interfaces/service.md)[]): *void*

Error-first callback containing (updated) services as second parameter.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`error` | *null* \| Error | Error object (if applicable)   |
`services?` | [*Service*](docs/api/interfaces/service.md)[] | List of services.    |

**Returns:** *void*
