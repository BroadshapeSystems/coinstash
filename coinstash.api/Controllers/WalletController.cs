using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace coinstash.api.Controllers
{
    [Route("api/wallet")]
    public class WalletController : Controller
    {
        [HttpGet]
        [Route("all")]
        public IEnumerable<string> Wallets()
        {
            return new string[] { Id = 1, provider = "Blockchain", currency = "Bitcoin"};
        }
    }
}