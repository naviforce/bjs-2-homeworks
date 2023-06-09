"use strict"

class AlarmClock  {
    constructor()  {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, calback)  {
      if(time === undefined || time === null || calback === undefined)  {
        throw new Error("Отсутствуют обязательные аргументы");
      }
      
      let clock =  {
        time: time,
        canCall: true,
        callback: calback
      }

      this.alarmCollection.push(clock);

      if(this.alarmCollection.some(clock => clock.time === time)) {
          console.warn("Уже присутствует звонок на это же время");
      }
    }

    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
    } 

    getCurrentFormattedTime()  {
      const date = new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return date;
    }

    start() {
      if(this.intervalId) {
        return;
      }

      this.intervalId = setInterval(() => this.alarmCollection.forEach(clock => {
        if(clock.time === this.getCurrentFormattedTime()  &&  clock.canCall == true)  {
          clock.canCall = false;
          clock.callback();
        }
      }), 1000);
    }
    
    stop()  {
      clearInterval(this.intervalId);
        this.intervalId = null;     
    }

    resetAllCalls() {
      this.alarmCollection.forEach(clock => clock.canCall = true);
    }

    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }

}
