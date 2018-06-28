const ABI = [
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_target',
        'type': 'address'
      },
      {
        'name': 'disable',
        'type': 'bool'
      }
    ],
    'name': 'voteOnDisableAdmin',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_details',
        'type': 'bytes32'
      }
    ],
    'name': 'modifyOrganization',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_payee',
        'type': 'address'
      }
    ],
    'name': 'getPayment',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_spender',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'recallTaskDistribution',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'recallProjectDistribution',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_target',
        'type': 'address'
      },
      {
        'name': '_sender',
        'type': 'address'
      }
    ],
    'name': 'getAdminDisableVotesOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'distributeToProject',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'recallOrganizationContribution',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_from',
        'type': 'address'
      },
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_submission',
        'type': 'uint256'
      },
      {
        'name': '_details',
        'type': 'bytes32'
      }
    ],
    'name': 'modifySubmission',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_target',
        'type': 'address'
      },
      {
        'name': '_sender',
        'type': 'address'
      }
    ],
    'name': 'getAdminEnableVotesOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'orgs',
    'outputs': [
      {
        'name': 'details',
        'type': 'bytes32'
      },
      {
        'name': 'total',
        'type': 'uint256'
      },
      {
        'name': 'stakes',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_details',
        'type': 'bytes32'
      }
    ],
    'name': 'createSubmission',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      }
    ],
    'name': 'retrievePayment',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'recallProjectContribution',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_admin',
        'type': 'address'
      },
      {
        'name': '_status',
        'type': 'bool'
      }
    ],
    'name': 'setAdminStatus',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_spender',
        'type': 'address'
      },
      {
        'name': '_subtractedValue',
        'type': 'uint256'
      }
    ],
    'name': 'decreaseApproval',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_submitter',
        'type': 'address'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'recallPayment',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      }
    ],
    'name': 'getProject',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      },
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_details',
        'type': 'bytes32'
      }
    ],
    'name': 'modifyTask',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_target',
        'type': 'address'
      }
    ],
    'name': 'getStakeOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      }
    ],
    'name': 'getTask',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      },
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'hasSufficientBalance',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'distributeToTask',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_details',
        'type': 'bytes32'
      }
    ],
    'name': 'modifyProject',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_submission',
        'type': 'uint256'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'disbursePayment',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'recallTaskContribution',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'contributeToOrganization',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'transfer',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'contributeToTask',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_target',
        'type': 'address'
      }
    ],
    'name': 'getTaskContributionOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'contributeToProject',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_target',
        'type': 'address'
      },
      {
        'name': 'enable',
        'type': 'bool'
      }
    ],
    'name': 'voteOnEnableAdmin',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_spender',
        'type': 'address'
      },
      {
        'name': '_addedValue',
        'type': 'uint256'
      }
    ],
    'name': 'increaseApproval',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_details',
        'type': 'bytes32'
      }
    ],
    'name': 'createTask',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_target',
        'type': 'address'
      }
    ],
    'name': 'getOrgContribtuionOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      },
      {
        'name': '_spender',
        'type': 'address'
      }
    ],
    'name': 'allowance',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_target',
        'type': 'address'
      }
    ],
    'name': 'getProjectContributionOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_target',
        'type': 'address'
      }
    ],
    'name': 'getAdmin',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      },
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_details',
        'type': 'bytes32'
      }
    ],
    'name': 'createProject',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_org',
        'type': 'address'
      },
      {
        'name': '_project',
        'type': 'uint256'
      },
      {
        'name': '_task',
        'type': 'uint256'
      },
      {
        'name': '_submission',
        'type': 'uint256'
      }
    ],
    'name': 'getSubmission',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      },
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_details',
        'type': 'bytes32'
      }
    ],
    'name': 'formOrganization',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': 'supply',
        'type': 'uint256'
      },
      {
        'name': 'lockout',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'spender',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'from',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'to',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event'
  }
]

export {ABI}
