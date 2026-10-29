up to date, audited 1545 packages in 3s

192 packages are looking for funding
  run `npm fund` for details

# npm audit report

braces  <3.0.3
Severity: high
Uncontrolled resource consumption in braces - https://github.com/advisories/GHSA-grv7-fg5c-xmjg
fix available via `npm audit fix`
node_modules/sane/node_modules/braces
  micromatch  <=4.0.7
  Depends on vulnerable versions of braces
  node_modules/sane/node_modules/micromatch
    anymatch  1.2.0 - 2.0.0
    Depends on vulnerable versions of micromatch
    node_modules/sane/node_modules/anymatch
      sane  1.5.0 - 4.1.0
      Depends on vulnerable versions of anymatch
      Depends on vulnerable versions of micromatch
      node_modules/sane
        jest-haste-map  24.0.0-alpha.0 - 26.6.2
        Depends on vulnerable versions of sane
        node_modules/@jest/core/node_modules/jest-haste-map
        node_modules/@jest/reporters/node_modules/jest-haste-map
        node_modules/@jest/test-sequencer/node_modules/jest-haste-map
        node_modules/jest-config/node_modules/jest-haste-map
        node_modules/jest-runner/node_modules/jest-haste-map
        node_modules/jest-runtime/node_modules/jest-haste-map
          @jest/core  *
          Depends on vulnerable versions of @jest/reporters
          Depends on vulnerable versions of @jest/transform
          Depends on vulnerable versions of jest-config
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of jest-runner
          Depends on vulnerable versions of jest-runtime
          node_modules/@jest/core
          @jest/reporters  <=26.6.2
          Depends on vulnerable versions of @jest/transform
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of node-notifier
          node_modules/@jest/reporters
          @jest/test-sequencer  <=26.6.3
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of jest-runner
          Depends on vulnerable versions of jest-runtime
          node_modules/@jest/test-sequencer
            jest-config  >=12.1.1-alpha.2935e14d
            Depends on vulnerable versions of @jest/test-sequencer
            Depends on vulnerable versions of babel-jest
            Depends on vulnerable versions of deepmerge
            Depends on vulnerable versions of jest-environment-jsdom
            Depends on vulnerable versions of jest-jasmine2
            node_modules/jest-config
              jest-runner  24.0.0-alpha.0 - 27.0.1
              Depends on vulnerable versions of jest-config
              Depends on vulnerable versions of jest-haste-map
              Depends on vulnerable versions of jest-jasmine2
              Depends on vulnerable versions of jest-runtime
              node_modules/jest-runner
              jest-runtime  24.0.0-alpha.0 - 26.6.3
              Depends on vulnerable versions of @jest/transform
              Depends on vulnerable versions of jest-config
              Depends on vulnerable versions of jest-haste-map
              node_modules/jest-runtime
                jest-jasmine2  25.2.0-alpha.86 - 26.6.3
                Depends on vulnerable versions of jest-runtime
                node_modules/jest-jasmine2
          @jest/transform  <=26.6.2
          Depends on vulnerable versions of jest-haste-map
          node_modules/@jest/core/node_modules/@jest/transform
          node_modules/@jest/reporters/node_modules/@jest/transform
          node_modules/jest-config/node_modules/@jest/transform
          node_modules/jest-runtime/node_modules/@jest/transform
            babel-jest  24.2.0-alpha.0 - 26.6.3
            Depends on vulnerable versions of @jest/transform
            node_modules/jest-config/node_modules/babel-jest

deepmerge  >=4.2.0
deepmerge mergeObject() allows prototype poisoning of returned objects - https://github.com/advisories/GHSA-gcqx-w48m-w2h4
fix available via `npm audit fix`
node_modules/deepmerge

fast-xml-parser  <5.7.0
Severity: moderate
fast-xml-parser XMLBuilder: XML Comment and CDATA Injection via Unescaped Delimiters - https://github.com/advisories/GHSA-gh4j-gqv2-49f6
fix available via `npm audit fix --force`
Will install @react-native-community/cli@20.2.0, which is a breaking change
node_modules/@react-native-community/cli-doctor/node_modules/fast-xml-parser
  @react-native-community/cli-platform-ios  10.2.0 - 13.1.0
  Depends on vulnerable versions of fast-xml-parser
  node_modules/@react-native-community/cli-doctor/node_modules/@react-native-community/cli-platform-ios
    @react-native-community/cli-doctor  10.2.0 - 13.1.0
    Depends on vulnerable versions of @react-native-community/cli-platform-ios
    node_modules/@react-native-community/cli-doctor
      @react-native-community/cli  10.2.0 - 13.1.0
      Depends on vulnerable versions of @react-native-community/cli-doctor
      node_modules/@react-native-community/cli

form-data  <=2.5.5
Severity: critical
form-data uses unsafe random function in form-data for choosing boundary - https://github.com/advisories/GHSA-fjxv-7rqg-78g4
form-data: CRLF injection in form-data via unescaped multipart field names and filenames - https://github.com/advisories/GHSA-hmw2-7cc7-3qxx
fix available via `npm audit fix`
node_modules/form-data
  request  *
  Depends on vulnerable versions of form-data
  Depends on vulnerable versions of qs
  Depends on vulnerable versions of tough-cookie
  Depends on vulnerable versions of uuid
  node_modules/request
    jsdom  0.1.20 || 0.2.0 - 16.5.3
    Depends on vulnerable versions of request
    Depends on vulnerable versions of request-promise-native
    Depends on vulnerable versions of tough-cookie
    node_modules/jsdom
      jest-environment-jsdom  10.0.2 - 25.5.0
      Depends on vulnerable versions of jsdom
      node_modules/jest-environment-jsdom
    request-promise-core  *
    Depends on vulnerable versions of request
    node_modules/request-promise-core
      request-promise-native  >=1.0.0
      Depends on vulnerable versions of request
      Depends on vulnerable versions of request-promise-core
      Depends on vulnerable versions of tough-cookie
      node_modules/request-promise-native


node-notifier  <8.0.1
Severity: moderate
OS Command Injection in node-notifier - https://github.com/advisories/GHSA-5fw9-fq32-wv5p
fix available via `npm audit fix`
node_modules/node-notifier

qs  <=6.15.4
Severity: moderate
qs's arrayLimit bypass in its bracket notation allows DoS via memory exhaustion - https://github.com/advisories/GHSA-6rw7-vpxm-498p
qs: Denial of Service via Attacker Controlled isBuffer - https://github.com/advisories/GHSA-4mjr-xmp4-gh2g
fix available via `npm audit fix`
node_modules/qs


tough-cookie  <4.1.3
Severity: moderate
tough-cookie Prototype Pollution vulnerability - https://github.com/advisories/GHSA-72xf-g2v4-qvf3
fix available via `npm audit fix`
node_modules/request-promise-native/node_modules/tough-cookie
node_modules/request/node_modules/tough-cookie
node_modules/tough-cookie

uuid  <11.1.1
Severity: moderate
uuid: Missing buffer bounds check in v3/v5/v6 when buf is provided - https://github.com/advisories/GHSA-w5hq-g745-h8pq
fix available via `npm audit fix`
node_modules/uuid

29 vulnerabilities (2 low, 23 moderate, 2 high, 2 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force
G:\Tools\FileSystem\ReactFrontEndOSINTRepository\OSINTReactNative [main +1 ~2 -0 !]> npm audit fix

up to date, audited 1545 packages in 3s

192 packages are looking for funding
  run `npm fund` for details

# npm audit report

braces  <3.0.3
Severity: high
Uncontrolled resource consumption in braces - https://github.com/advisories/GHSA-grv7-fg5c-xmjg
fix available via `npm audit fix`
node_modules/sane/node_modules/braces
  micromatch  <=4.0.7
  Depends on vulnerable versions of braces
  node_modules/sane/node_modules/micromatch
    anymatch  1.2.0 - 2.0.0
    Depends on vulnerable versions of micromatch
    node_modules/sane/node_modules/anymatch
      sane  1.5.0 - 4.1.0
      Depends on vulnerable versions of anymatch
      Depends on vulnerable versions of micromatch
      node_modules/sane
        jest-haste-map  24.0.0-alpha.0 - 26.6.2
        Depends on vulnerable versions of sane
        node_modules/@jest/core/node_modules/jest-haste-map
        node_modules/@jest/reporters/node_modules/jest-haste-map
        node_modules/@jest/test-sequencer/node_modules/jest-haste-map
        node_modules/jest-config/node_modules/jest-haste-map
        node_modules/jest-runner/node_modules/jest-haste-map
        node_modules/jest-runtime/node_modules/jest-haste-map
          @jest/core  *
          Depends on vulnerable versions of @jest/reporters
          Depends on vulnerable versions of @jest/transform
          Depends on vulnerable versions of jest-config
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of jest-runner
          Depends on vulnerable versions of jest-runtime
          node_modules/@jest/core
          @jest/reporters  <=26.6.2
          Depends on vulnerable versions of @jest/transform
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of node-notifier
          node_modules/@jest/reporters
          @jest/test-sequencer  <=26.6.3
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of jest-runner
          Depends on vulnerable versions of jest-runtime
          node_modules/@jest/test-sequencer
            jest-config  >=12.1.1-alpha.2935e14d
            Depends on vulnerable versions of @jest/test-sequencer
            Depends on vulnerable versions of babel-jest
            Depends on vulnerable versions of deepmerge
            Depends on vulnerable versions of jest-environment-jsdom
            Depends on vulnerable versions of jest-jasmine2
            node_modules/jest-config
              jest-runner  24.0.0-alpha.0 - 27.0.1
              Depends on vulnerable versions of jest-config
              Depends on vulnerable versions of jest-haste-map
              Depends on vulnerable versions of jest-jasmine2
              Depends on vulnerable versions of jest-runtime
              node_modules/jest-runner
              jest-runtime  24.0.0-alpha.0 - 26.6.3
              Depends on vulnerable versions of @jest/transform
              Depends on vulnerable versions of jest-config
              Depends on vulnerable versions of jest-haste-map
              node_modules/jest-runtime
                jest-jasmine2  25.2.0-alpha.86 - 26.6.3
                Depends on vulnerable versions of jest-runtime
                node_modules/jest-jasmine2
          @jest/transform  <=26.6.2
          Depends on vulnerable versions of jest-haste-map
          node_modules/@jest/core/node_modules/@jest/transform
          node_modules/@jest/reporters/node_modules/@jest/transform
          node_modules/jest-config/node_modules/@jest/transform
          node_modules/jest-runtime/node_modules/@jest/transform
            babel-jest  24.2.0-alpha.0 - 26.6.3
            Depends on vulnerable versions of @jest/transform
            node_modules/jest-config/node_modules/babel-jest

deepmerge  >=4.2.0
deepmerge mergeObject() allows prototype poisoning of returned objects - https://github.com/advisories/GHSA-gcqx-w48m-w2h4
fix available via `npm audit fix`
node_modules/deepmerge

fast-xml-parser  <5.7.0
Severity: moderate
fast-xml-parser XMLBuilder: XML Comment and CDATA Injection via Unescaped Delimiters - https://github.com/advisories/GHSA-gh4j-gqv2-49f6
fix available via `npm audit fix --force`
Will install @react-native-community/cli@20.2.0, which is a breaking change
node_modules/@react-native-community/cli-doctor/node_modules/fast-xml-parser
  @react-native-community/cli-platform-ios  10.2.0 - 13.1.0
  Depends on vulnerable versions of fast-xml-parser
  node_modules/@react-native-community/cli-doctor/node_modules/@react-native-community/cli-platform-ios
    @react-native-community/cli-doctor  10.2.0 - 13.1.0
    Depends on vulnerable versions of @react-native-community/cli-platform-ios
    node_modules/@react-native-community/cli-doctor
      @react-native-community/cli  10.2.0 - 13.1.0
      Depends on vulnerable versions of @react-native-community/cli-doctor
      node_modules/@react-native-community/cli

form-data  <=2.5.5
Severity: critical
form-data uses unsafe random function in form-data for choosing boundary - https://github.com/advisories/GHSA-fjxv-7rqg-78g4
form-data: CRLF injection in form-data via unescaped multipart field names and filenames - https://github.com/advisories/GHSA-hmw2-7cc7-3qxx
fix available via `npm audit fix`
node_modules/form-data
  request  *
  Depends on vulnerable versions of form-data
  Depends on vulnerable versions of qs
  Depends on vulnerable versions of tough-cookie
  Depends on vulnerable versions of uuid
  node_modules/request
    jsdom  0.1.20 || 0.2.0 - 16.5.3
    Depends on vulnerable versions of request
    Depends on vulnerable versions of request-promise-native
    Depends on vulnerable versions of tough-cookie
    node_modules/jsdom
      jest-environment-jsdom  10.0.2 - 25.5.0
      Depends on vulnerable versions of jsdom
      node_modules/jest-environment-jsdom
    request-promise-core  *
    Depends on vulnerable versions of request
    node_modules/request-promise-core
      request-promise-native  >=1.0.0
      Depends on vulnerable versions of request
      Depends on vulnerable versions of request-promise-core
      Depends on vulnerable versions of tough-cookie
      node_modules/request-promise-native


node-notifier  <8.0.1
Severity: moderate
OS Command Injection in node-notifier - https://github.com/advisories/GHSA-5fw9-fq32-wv5p
fix available via `npm audit fix`
node_modules/node-notifier

qs  <=6.15.4
Severity: moderate
qs's arrayLimit bypass in its bracket notation allows DoS via memory exhaustion - https://github.com/advisories/GHSA-6rw7-vpxm-498p
qs: Denial of Service via Attacker Controlled isBuffer - https://github.com/advisories/GHSA-4mjr-xmp4-gh2g
fix available via `npm audit fix`
node_modules/qs


tough-cookie  <4.1.3
Severity: moderate
tough-cookie Prototype Pollution vulnerability - https://github.com/advisories/GHSA-72xf-g2v4-qvf3
fix available via `npm audit fix`
node_modules/request-promise-native/node_modules/tough-cookie
node_modules/request/node_modules/tough-cookie
node_modules/tough-cookie

uuid  <11.1.1
Severity: moderate
uuid: Missing buffer bounds check in v3/v5/v6 when buf is provided - https://github.com/advisories/GHSA-w5hq-g745-h8pq
fix available via `npm audit fix`
node_modules/uuid

29 vulnerabilities (2 low, 23 moderate, 2 high, 2 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force
G:\Tools\FileSystem\ReactFrontEndOSINTRepository\OSINTReactNative [main +1 ~2 -0 !]> npm audit fix

up to date, audited 1545 packages in 3s

192 packages are looking for funding
  run `npm fund` for details

# npm audit report

braces  <3.0.3
Severity: high
Uncontrolled resource consumption in braces - https://github.com/advisories/GHSA-grv7-fg5c-xmjg
fix available via `npm audit fix`
node_modules/sane/node_modules/braces
  micromatch  <=4.0.7
  Depends on vulnerable versions of braces
  node_modules/sane/node_modules/micromatch
    anymatch  1.2.0 - 2.0.0
    Depends on vulnerable versions of micromatch
    node_modules/sane/node_modules/anymatch
      sane  1.5.0 - 4.1.0
      Depends on vulnerable versions of anymatch
      Depends on vulnerable versions of micromatch
      node_modules/sane
        jest-haste-map  24.0.0-alpha.0 - 26.6.2
        Depends on vulnerable versions of sane
        node_modules/@jest/core/node_modules/jest-haste-map
        node_modules/@jest/reporters/node_modules/jest-haste-map
        node_modules/@jest/test-sequencer/node_modules/jest-haste-map
        node_modules/jest-config/node_modules/jest-haste-map
        node_modules/jest-runner/node_modules/jest-haste-map
        node_modules/jest-runtime/node_modules/jest-haste-map
          @jest/core  *
          Depends on vulnerable versions of @jest/reporters
          Depends on vulnerable versions of @jest/transform
          Depends on vulnerable versions of jest-config
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of jest-runner
          Depends on vulnerable versions of jest-runtime
          node_modules/@jest/core
          @jest/reporters  <=26.6.2
          Depends on vulnerable versions of @jest/transform
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of node-notifier
          node_modules/@jest/reporters
          @jest/test-sequencer  <=26.6.3
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of jest-runner
          Depends on vulnerable versions of jest-runtime
          node_modules/@jest/test-sequencer
            jest-config  >=12.1.1-alpha.2935e14d
            Depends on vulnerable versions of @jest/test-sequencer
            Depends on vulnerable versions of babel-jest
            Depends on vulnerable versions of deepmerge
            Depends on vulnerable versions of jest-environment-jsdom
            Depends on vulnerable versions of jest-jasmine2
            node_modules/jest-config
              jest-runner  24.0.0-alpha.0 - 27.0.1
              Depends on vulnerable versions of jest-config
              Depends on vulnerable versions of jest-haste-map
              Depends on vulnerable versions of jest-jasmine2
              Depends on vulnerable versions of jest-runtime
              node_modules/jest-runner
              jest-runtime  24.0.0-alpha.0 - 26.6.3
              Depends on vulnerable versions of @jest/transform
              Depends on vulnerable versions of jest-config
              Depends on vulnerable versions of jest-haste-map
              node_modules/jest-runtime
                jest-jasmine2  25.2.0-alpha.86 - 26.6.3
                Depends on vulnerable versions of jest-runtime
                node_modules/jest-jasmine2
          @jest/transform  <=26.6.2
          Depends on vulnerable versions of jest-haste-map
          node_modules/@jest/core/node_modules/@jest/transform
          node_modules/@jest/reporters/node_modules/@jest/transform
          node_modules/jest-config/node_modules/@jest/transform
          node_modules/jest-runtime/node_modules/@jest/transform
            babel-jest  24.2.0-alpha.0 - 26.6.3
            Depends on vulnerable versions of @jest/transform
            node_modules/jest-config/node_modules/babel-jest

deepmerge  >=4.2.0
deepmerge mergeObject() allows prototype poisoning of returned objects - https://github.com/advisories/GHSA-gcqx-w48m-w2h4
fix available via `npm audit fix`
node_modules/deepmerge

fast-xml-parser  <5.7.0
Severity: moderate
fast-xml-parser XMLBuilder: XML Comment and CDATA Injection via Unescaped Delimiters - https://github.com/advisories/GHSA-gh4j-gqv2-49f6
fix available via `npm audit fix --force`
Will install @react-native-community/cli@20.2.0, which is a breaking change
node_modules/@react-native-community/cli-doctor/node_modules/fast-xml-parser
  @react-native-community/cli-platform-ios  10.2.0 - 13.1.0
  Depends on vulnerable versions of fast-xml-parser
  node_modules/@react-native-community/cli-doctor/node_modules/@react-native-community/cli-platform-ios
    @react-native-community/cli-doctor  10.2.0 - 13.1.0
    Depends on vulnerable versions of @react-native-community/cli-platform-ios
    node_modules/@react-native-community/cli-doctor
      @react-native-community/cli  10.2.0 - 13.1.0
      Depends on vulnerable versions of @react-native-community/cli-doctor
      node_modules/@react-native-community/cli

form-data  <=2.5.5
Severity: critical
form-data uses unsafe random function in form-data for choosing boundary - https://github.com/advisories/GHSA-fjxv-7rqg-78g4
form-data: CRLF injection in form-data via unescaped multipart field names and filenames - https://github.com/advisories/GHSA-hmw2-7cc7-3qxx
fix available via `npm audit fix`
node_modules/form-data
  request  *
  Depends on vulnerable versions of form-data
  Depends on vulnerable versions of qs
  Depends on vulnerable versions of tough-cookie
  Depends on vulnerable versions of uuid
  node_modules/request
    jsdom  0.1.20 || 0.2.0 - 16.5.3
    Depends on vulnerable versions of request
    Depends on vulnerable versions of request-promise-native
    Depends on vulnerable versions of tough-cookie
    node_modules/jsdom
      jest-environment-jsdom  10.0.2 - 25.5.0
      Depends on vulnerable versions of jsdom
      node_modules/jest-environment-jsdom
    request-promise-core  *
    Depends on vulnerable versions of request
    node_modules/request-promise-core
      request-promise-native  >=1.0.0
      Depends on vulnerable versions of request
      Depends on vulnerable versions of request-promise-core
      Depends on vulnerable versions of tough-cookie
      node_modules/request-promise-native


node-notifier  <8.0.1
Severity: moderate
OS Command Injection in node-notifier - https://github.com/advisories/GHSA-5fw9-fq32-wv5p
fix available via `npm audit fix`
node_modules/node-notifier

qs  <=6.15.4
Severity: moderate
qs's arrayLimit bypass in its bracket notation allows DoS via memory exhaustion - https://github.com/advisories/GHSA-6rw7-vpxm-498p
qs: Denial of Service via Attacker Controlled isBuffer - https://github.com/advisories/GHSA-4mjr-xmp4-gh2g
fix available via `npm audit fix`
node_modules/qs


tough-cookie  <4.1.3
Severity: moderate
tough-cookie Prototype Pollution vulnerability - https://github.com/advisories/GHSA-72xf-g2v4-qvf3
fix available via `npm audit fix`
node_modules/request-promise-native/node_modules/tough-cookie
node_modules/request/node_modules/tough-cookie
node_modules/tough-cookie

uuid  <11.1.1
Severity: moderate
uuid: Missing buffer bounds check in v3/v5/v6 when buf is provided - https://github.com/advisories/GHSA-w5hq-g745-h8pq
fix available via `npm audit fix`
node_modules/uuid

29 vulnerabilities (2 low, 23 moderate, 2 high, 2 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force
G:\Tools\FileSystem\ReactFrontEndOSINTRepository\OSINTReactNative [main +1 ~2 -0 !]> npm audit    
# npm audit report

braces  <3.0.3
Severity: high
Uncontrolled resource consumption in braces - https://github.com/advisories/GHSA-grv7-fg5c-xmjg
fix available via `npm audit fix`
node_modules/sane/node_modules/braces
  micromatch  <=4.0.7
  Depends on vulnerable versions of braces
  node_modules/sane/node_modules/micromatch
    anymatch  1.2.0 - 2.0.0
    Depends on vulnerable versions of micromatch
    node_modules/sane/node_modules/anymatch
      sane  1.5.0 - 4.1.0
      Depends on vulnerable versions of anymatch
      Depends on vulnerable versions of micromatch
      node_modules/sane
        jest-haste-map  24.0.0-alpha.0 - 26.6.2
        Depends on vulnerable versions of sane
        node_modules/@jest/core/node_modules/jest-haste-map
        node_modules/@jest/reporters/node_modules/jest-haste-map
        node_modules/@jest/test-sequencer/node_modules/jest-haste-map
        node_modules/jest-config/node_modules/jest-haste-map
        node_modules/jest-runner/node_modules/jest-haste-map
        node_modules/jest-runtime/node_modules/jest-haste-map
          @jest/core  *
          Depends on vulnerable versions of @jest/reporters
          Depends on vulnerable versions of @jest/transform
          Depends on vulnerable versions of jest-config
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of jest-runner
          Depends on vulnerable versions of jest-runtime
          node_modules/@jest/core
          @jest/reporters  <=26.6.2
          Depends on vulnerable versions of @jest/transform
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of node-notifier
          node_modules/@jest/reporters
          @jest/test-sequencer  <=26.6.3
          Depends on vulnerable versions of jest-haste-map
          Depends on vulnerable versions of jest-runner
          Depends on vulnerable versions of jest-runtime
          node_modules/@jest/test-sequencer
            jest-config  >=12.1.1-alpha.2935e14d
            Depends on vulnerable versions of @jest/test-sequencer
            Depends on vulnerable versions of babel-jest
            Depends on vulnerable versions of deepmerge
            Depends on vulnerable versions of jest-environment-jsdom
            Depends on vulnerable versions of jest-jasmine2
            node_modules/jest-config
              jest-runner  24.0.0-alpha.0 - 27.0.1
              Depends on vulnerable versions of jest-config
              Depends on vulnerable versions of jest-haste-map
              Depends on vulnerable versions of jest-jasmine2
              Depends on vulnerable versions of jest-runtime
              node_modules/jest-runner
              jest-runtime  24.0.0-alpha.0 - 26.6.3
              Depends on vulnerable versions of @jest/transform
              Depends on vulnerable versions of jest-config
              Depends on vulnerable versions of jest-haste-map
              node_modules/jest-runtime
                jest-jasmine2  25.2.0-alpha.86 - 26.6.3
                Depends on vulnerable versions of jest-runtime
                node_modules/jest-jasmine2
          @jest/transform  <=26.6.2
          Depends on vulnerable versions of jest-haste-map
          node_modules/@jest/core/node_modules/@jest/transform
          node_modules/@jest/reporters/node_modules/@jest/transform
          node_modules/jest-config/node_modules/@jest/transform
          node_modules/jest-runtime/node_modules/@jest/transform
            babel-jest  24.2.0-alpha.0 - 26.6.3
            Depends on vulnerable versions of @jest/transform
            node_modules/jest-config/node_modules/babel-jest

deepmerge  >=4.2.0
deepmerge mergeObject() allows prototype poisoning of returned objects - https://github.com/advisories/GHSA-gcqx-w48m-w2h4
fix available via `npm audit fix`
node_modules/deepmerge

fast-xml-parser  <5.7.0
Severity: moderate
fast-xml-parser XMLBuilder: XML Comment and CDATA Injection via Unescaped Delimiters - https://github.com/advisories/GHSA-gh4j-gqv2-49f6
fix available via `npm audit fix --force`
Will install @react-native-community/cli@20.2.0, which is a breaking change
node_modules/@react-native-community/cli-doctor/node_modules/fast-xml-parser
  @react-native-community/cli-platform-ios  10.2.0 - 13.1.0
  Depends on vulnerable versions of fast-xml-parser
  node_modules/@react-native-community/cli-doctor/node_modules/@react-native-community/cli-platform-ios
    @react-native-community/cli-doctor  10.2.0 - 13.1.0
    Depends on vulnerable versions of @react-native-community/cli-platform-ios
    node_modules/@react-native-community/cli-doctor
      @react-native-community/cli  10.2.0 - 13.1.0
      Depends on vulnerable versions of @react-native-community/cli-doctor
      node_modules/@react-native-community/cli

form-data  <=2.5.5
Severity: critical
form-data uses unsafe random function in form-data for choosing boundary - https://github.com/advisories/GHSA-fjxv-7rqg-78g4
form-data: CRLF injection in form-data via unescaped multipart field names and filenames - https://github.com/advisories/GHSA-hmw2-7cc7-3qxx
fix available via `npm audit fix`
node_modules/form-data
  request  *
  Depends on vulnerable versions of form-data
  Depends on vulnerable versions of qs
  Depends on vulnerable versions of tough-cookie
  Depends on vulnerable versions of uuid
  node_modules/request
    jsdom  0.1.20 || 0.2.0 - 16.5.3
    Depends on vulnerable versions of request
    Depends on vulnerable versions of request-promise-native
    Depends on vulnerable versions of tough-cookie
    node_modules/jsdom
      jest-environment-jsdom  10.0.2 - 25.5.0
      Depends on vulnerable versions of jsdom
      node_modules/jest-environment-jsdom
    request-promise-core  *
    Depends on vulnerable versions of request
    node_modules/request-promise-core
      request-promise-native  >=1.0.0
      Depends on vulnerable versions of request
      Depends on vulnerable versions of request-promise-core
      Depends on vulnerable versions of tough-cookie
      node_modules/request-promise-native


node-notifier  <8.0.1
Severity: moderate
OS Command Injection in node-notifier - https://github.com/advisories/GHSA-5fw9-fq32-wv5p
fix available via `npm audit fix`
node_modules/node-notifier

qs  <=6.15.4
Severity: moderate
qs's arrayLimit bypass in its bracket notation allows DoS via memory exhaustion - https://github.com/advisories/GHSA-6rw7-vpxm-498p
qs: Denial of Service via Attacker Controlled isBuffer - https://github.com/advisories/GHSA-4mjr-xmp4-gh2g
fix available via `npm audit fix`
node_modules/qs


tough-cookie  <4.1.3
Severity: moderate
tough-cookie Prototype Pollution vulnerability - https://github.com/advisories/GHSA-72xf-g2v4-qvf3
fix available via `npm audit fix`
node_modules/request-promise-native/node_modules/tough-cookie
node_modules/request/node_modules/tough-cookie
node_modules/tough-cookie

uuid  <11.1.1
Severity: moderate
uuid: Missing buffer bounds check in v3/v5/v6 when buf is provided - https://github.com/advisories/GHSA-w5hq-g745-h8pq
fix available via `npm audit fix`
node_modules/uuid

29 vulnerabilities (2 low, 23 moderate, 2 high, 2 critical)