// Creator: Grafana k6 Browser Recorder 1.0.6

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 10, duration: '5m' }

export default function main() {
  let response

  group('page_1 - https://test.k6.io/', function () {
    response = http.get('https://test.k6.io/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(4.7)
  })

  group('page_2 - https://test.k6.io/flip_coin.php', function () {
    response = http.get('https://test.k6.io/flip_coin.php', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(1.9)
  })

  group('page_3 - https://test.k6.io/flip_coin.php?bet=heads', function () {
    response = http.get('https://test.k6.io/flip_coin.php?bet=heads', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(1.2)
    response = http.get('https://test.k6.io/flip_coin.php?bet=heads', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.9)
  })

  group('page_4 - https://test.k6.io/flip_coin.php?bet=tails', function () {
    response = http.get('https://test.k6.io/flip_coin.php?bet=tails', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.6)
    response = http.get('https://test.k6.io/flip_coin.php?bet=tails', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.5)
    response = http.get('https://test.k6.io/flip_coin.php?bet=tails', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test.k6.io/flip_coin.php?bet=tails', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.8)
    response = http.get('https://test.k6.io/flip_coin.php?bet=tails', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.9)
  })

  group('page_5 - https://test.k6.io/flip_coin.php?bet=heads', function () {
    response = http.get('https://test.k6.io/flip_coin.php?bet=heads', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.7)
    response = http.get('https://test.k6.io/flip_coin.php?bet=heads', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(1)
  })

  group('page_6 - https://test.k6.io/flip_coin.php?bet=tails', function () {
    response = http.get('https://test.k6.io/flip_coin.php?bet=tails', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(1.4)
  })

  group('page_7 - https://test.k6.io/flip_coin.php?bet=heads', function () {
    response = http.get('https://test.k6.io/flip_coin.php?bet=heads', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })
}