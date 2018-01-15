pragma solidity ^0.4.11;
import './KryptomonBase.sol';

contract GenZeroEggSales is KryptomonBase {
  // The total number of "gen 0" eggs remaining. These eggs have no
  // parents or genetics, and hatch into a Kryptomon. These eggs are
  // stored as an int so that the Kryptomon creators don't have to pay
  // a crazy gas cost to initialize thousands of identical eggs. These
  // eggs are effecitvely owned by the Kryptomon board and are non
  // transferable.
  uint genZeroEggs = 1000000;

  // A reserve of gen0 eggs that is controlled by the Manager. For use
  // with beta testing, bug bounties, etc.
  uint genZeroEggsReserve = 50000;

  // The price per gen0 egg. Can be reassigned by the Manager based on
  // ether <-> fiat price movements.
  uint genZeroEggPrice = 10 finney;

  // Event triggered when a gen zero egg is successfully hatched.
  event genZeroEggHatched(address buyerId, uint kryptomonId);

  // Function that allows the Manager to change the gen0 egg price.
  function setGenZeroEggPrice(uint price) external managerOnly {
    genZeroEggPrice = price;
  }

  // Function that allows the Manager to distribute gen0 reserve eggs.
  // To be used for beta testing, bug bounty rewards, etc. 
  function assignReserveEggs(address _sendTo, uint _numEggs)
    external
    managerOnly
  {
    require(_numEggs <= genZeroEggsReserve);
    genZeroEggsReserve -= _numEggs;
    for(uint i = 0; i < _numEggs; i++) {
      uint32 kryptomonId = createGenZeroKryptomon(i);
      kryptomonIndexToOwner[kryptomonId] = _sendTo;
      genZeroEggHatched(_sendTo, kryptomonId);
    }
  }

  // The function Kryptomon players call to purchase gen0 eggs.
  // Automatically hatches a kryptomon and sets ownership to the
  // purchaser.
  function buyGenZeroEggs(uint _numEggs)
    external
    whenGenZeroNotPaused
    payable
  {
    require(_numEggs <= genZeroEggs);
    uint totalCost = _numEggs * genZeroEggPrice;
    require(msg.value >= totalCost);
    genZeroEggs -= _numEggs;
    for(uint i = 0; i < _numEggs; i++) {
      uint32 kryptomonId = createGenZeroKryptomon(i);
      kryptomonIndexToOwner[kryptomonId] = msg.sender;
      genZeroEggHatched(msg.sender, kryptomonId);
    }
  }

  // Function used to create a gen0 kryptomon. Employs similar logic to
  // createKryptomon except that there aren't any genetic effects.
  function createGenZeroKryptomon(uint id) internal returns(uint32) {
    uint16 speciesId = determineGenZeroSpeciesId(id);
    uint256 genes = randomGenes(id);
    kryptomonList.push(Kryptomon({
      speciesId: speciesId,
      genes: uint8(genes),
      generation: 0,
      birthTimeStamp: uint32(now),
      breedingCooldown: uint32(now),
      numChildren: 0
    }));
    return uint32(kryptomonList.length - 1);
  }

  function determineGenZeroSpeciesId(uint id)
    private
    view
    returns(uint16)
  {
    uint256 randSpecies = randomSpecies(id);
    if (randSpecies < 350000) {
      // Set to a common creature (35% probability).

    } else if (randSpecies >= 350000 && randSpecies < 600000) {
      // Set to an uncommon creature (25% probability).

    } else if (randSpecies >= 600000 && randSpecies < 800000) {
      // Set to a rare creature (20% probability).

    } else if (randSpecies >= 800000 && randSpecies < 950000) {
      // Set to a super rare creature (15% probability).

    } else if (randSpecies >= 950000 && randSpecies < 998000) {
      // Set to an ultra rare creature (~5% probability).
    } else if (randSpecies >= 998000 && randSpecies < 999997) {
      // Set to a mega rare creature (~0.1% probability).
    } else if (randSpecies >= 999997 && randSpecies <= 1000000) {
      // Set to a legendary creature (0.0003% probability).
    }
  }
}
