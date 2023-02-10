# Usage

## Logging Options

```ts
const logger = new Logger();

logger.error("Error: error message");
logger.debug("DEBUG");
logger.info("INFO");
logger.warn("WARN");
logger.trace("TRACE");
```

## Logging Objects

```ts
const logger = new Logger();

const position_first = {
    id: 0,
    blockNumber: 16589057,
    account: "0x",
    token: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    isShort: true,
};

const position_second = {
    id: 1,
    blockNumber: 16589147,
    account: "0x",
    token: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    isShort: true,
};

const positions = [position_first, position_second];

// logging a single object
logger.trace(position_first);
logger.trace(position_second);

// logging list of objects
logger.debug(positions);
```
