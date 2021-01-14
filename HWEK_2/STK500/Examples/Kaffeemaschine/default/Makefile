################################################################################
# Automatically-generated file. Do not edit!
################################################################################

SHELL := cmd.exe
RM := rm -rf

USER_OBJS :=

LIBS := 
PROJ := 

O_SRCS := 
C_SRCS := 
S_SRCS := 
S_UPPER_SRCS := 
OBJ_SRCS := 
ASM_SRCS := 
PREPROCESSING_SRCS := 
OBJS := 
OBJS_AS_ARGS := 
C_DEPS := 
C_DEPS_AS_ARGS := 
EXECUTABLES := 
OUTPUT_FILE_PATH :=
OUTPUT_FILE_PATH_AS_ARGS :=
AVR_APP_PATH :=$$$AVR_APP_PATH$$$
QUOTE := "
ADDITIONAL_DEPENDENCIES:=
OUTPUT_FILE_DEP:=

# Every subdirectory with source files must be described here
SUBDIRS := 


# Add inputs and outputs from these tool invocations to the build variables 
C_SRCS +=  \
../main.c \
../oddebug.c \
../usbdrv.c \
../tms3705_driver.c \
../kaffeemaschine.c \
../byte_funktionen.c


PREPROCESSING_SRCS +=  \
../usbdrvasm.S


ASM_SRCS += 


OBJS +=  \
main.o \
oddebug.o \
usbdrv.o \
usbdrvasm.o \
tms3705_driver.o \
kaffeemaschine.o \
byte_funktionen.o


OBJS_AS_ARGS +=  \
main.o \
oddebug.o \
usbdrv.o \
usbdrvasm.o \
tms3705_driver.o \
kaffeemaschine.o \
byte_funktionen.o


C_DEPS +=  \
main.d \
oddebug.d \
usbdrv.d \
tms3705_driver.d \
kaffeemaschine.d \
byte_funktionen.d


C_DEPS_AS_ARGS +=  \
main.d \
oddebug.d \
usbdrv.d \
tms3705_driver.d \
kaffeemaschine.d \
byte_funktionen.d


OUTPUT_FILE_PATH +=USB_taste_home.elf

OUTPUT_FILE_PATH_AS_ARGS +=USB_taste_home.elf

ADDITIONAL_DEPENDENCIES:=

OUTPUT_FILE_DEP:= ./makedep.mk

# AVR32/GNU C Compiler













./%.o: .././%.c
	@echo Building file: $<
	@echo Invoking: AVR/GNU C Compiler : 
	$(QUOTE)C:\WinAVR-20070525\bin\avr-gcc.exe$(QUOTE) -DF_CPU=12000000UL  -O1 -Wall -c -gdwarf-2 -fsigned-char  -MD -MP -MF "$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -MT"$(@:%.o=%.o)"  -mmcu=atmega8   -o"$@" "$<" 
	@echo Finished building: $<



# AVR32/GNU Preprocessing Assembler



# AVR32/GNU Assembler
./usbdrvasm.o: .././usbdrvasm.s
	@echo Building file: $<
	@echo Invoking: AVR32/GNU Assembler : 
	$(QUOTE)C:\WinAVR-20070525\bin\avr-gcc.exe$(QUOTE) -Wa,-gdwarf2 -x assembler-with-cpp -c -Wall -gdwarf-2             -DF_CPU=12000000UL -O1 -fsigned-char  -mmcu=atmega8   -o"$@" "$<"
	@echo Finished building: $<


./%.o: .././%.s
	@echo Building file: $<
	@echo Invoking: AVR32/GNU Assembler : 
	$(QUOTE)C:\WinAVR-20070525\bin\avr-gcc.exe$(QUOTE) -Wa,-gdwarf2 -x assembler-with-cpp -c -Wall -gdwarf-2             -DF_CPU=12000000UL -O1 -fsigned-char  -mmcu=atmega8   -o"$@" "$<"
	@echo Finished building: $<




ifneq ($(MAKECMDGOALS),clean)
ifneq ($(strip $(C_DEPS)),)
-include $(C_DEPS)
endif
endif

# Add inputs and outputs from these tool invocations to the build variables 

# All Target
all: $(OUTPUT_FILE_PATH) $(ADDITIONAL_DEPENDENCIES)

$(OUTPUT_FILE_PATH): $(OBJS) $(USER_OBJS) $(OUTPUT_FILE_DEP)
	@echo Building target: $@
	@echo Invoking: AVR/GNU Linker : 
	$(QUOTE)C:\WinAVR-20070525\bin\avr-gcc.exe$(QUOTE) -o$(OUTPUT_FILE_PATH_AS_ARGS) $(OBJS_AS_ARGS) $(USER_OBJS) $(LIBS) -Wl,-Map="USB_taste_home.map" -Wl,--start-group  -Wl,--end-group  -mmcu=atmega8  
	@echo Finished building target: $@
	"C:\WinAVR-20070525\bin\avr-objcopy.exe" -O ihex -R .eeprom -R .fuse -R .lock -R .signature  "USB_taste_home.elf" "USB_taste_home.hex"
	"C:\WinAVR-20070525\bin\avr-objcopy.exe" -j .eeprom  --set-section-flags=.eeprom=alloc,load --change-section-lma .eeprom=0  --no-change-warnings -O ihex "USB_taste_home.elf" "USB_taste_home.eep" || exit 0
	"C:\WinAVR-20070525\bin\avr-objdump.exe" -h -S "USB_taste_home.elf" > "USB_taste_home.lss"
	"C:\WinAVR-20070525\bin\avr-size.exe" "USB_taste_home.elf"
	





# Other Targets
clean:
	-$(RM) $(OBJS_AS_ARGS)$(C_DEPS_AS_ARGS) $(EXECUTABLES) 
	rm -rf "USB_taste_home.elf" "USB_taste_home.a" "USB_taste_home.hex" "USB_taste_home.lss" "USB_taste_home.eep" "USB_taste_home.map"
	